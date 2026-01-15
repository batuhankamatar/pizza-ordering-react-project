describe('Pizza Sipariş Uygulaması Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Anasayfadan sipariş formuna gidebiliyor', () => {
    cy.get('#order-pizza').click();
    cy.url().should('include', '/pizza');
  });

  it('Form validasyonları: Malzeme sayısı 4ten azken buton disabled olmalı', () => {
    cy.get('#order-pizza').click();
    cy.get('input[value="M"]').check({ force: true });
    cy.get('select[name^="crust"]').filter(':visible').select('thin');

    cy.get('input[value="Pepperoni"]').check({ force: true });
    cy.get('input[value="Sosis"]').check({ force: true });
    cy.get('.order-button').should('be.disabled');

    cy.get('input[value="Mısır"]').check({ force: true });
    cy.get('input[value="Sucuk"]').check({ force: true });
    cy.get('.order-button').should('not.be.disabled');
  });

  it('Sipariş özeti ve adet kontrolü doğru çalışıyor mu?', () => {
    cy.get('#order-pizza').click();
    cy.contains('button', '+').click();
    cy.contains('button', '+').click();
    cy.get('.quantity-display').should('contain', '3');

    const items = ["Pepperoni", "Sosis", "Mısır", "Sucuk"];
    items.forEach(item => cy.get(`input[value="${item}"]`).check({ force: true }));
    
    cy.get('.price-total').should('contain', '316.5');
  });

  it('Başarılı sipariş akışı', () => {
    cy.get('#order-pizza').click();
    cy.get('input[value="L"]').check({ force: true });
    cy.get('select[name^="crust"]').filter(':visible').select('thick');
    
    const toppings = ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'];
    toppings.forEach(item => cy.get(`input[value="${item}"]`).check({ force: true }));
    
    cy.get('input[name="note"]').type('Acı olsun');
    cy.get('.order-button').click();

    cy.url().should('include', '/success');
    cy.contains('TEBRİKLER').should('exist');
  });

  it('Maksimum 10 malzeme sınırı', () => {
    cy.get('#order-pizza').click();
    const items = ["Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan","Domates","Mısır","Sucuk","Sarımsak","Biber"];
    items.forEach(item => cy.get(`input[value="${item}"]`).check({ force: true }));

    cy.get('input[value="Kabak"]').should('be.disabled');
  });

  it('API isteği doğru verilerle gönderiliyor ve Success sayfasında görünüyor', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza').as('postOrder');

    cy.get('#order-pizza').click();
    cy.get('input[value="M"]').check({ force: true });
    cy.get('select[name^="crust"]').filter(':visible').select('thin');
    
    ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'].forEach(item => 
        cy.get(`input[value="${item}"]`).check({ force: true })
    );
    
    cy.get('.order-button').click();

    cy.wait('@postOrder', { timeout: 10000 }).then((interception) => {
      expect(interception.request.body.toppings).to.include('Pepperoni');
    });

    cy.url().should('include', '/success');
  });
  
  it('Sipariş notu girildiğinde Success sayfasında görünmeli, girilmediğinde görünmemeli', () => {
    cy.get('#order-pizza').click();
    cy.get('input[value="M"]').check({ force: true });
    cy.get('select[name^="crust"]').filter(':visible').select('thin');
    ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'].forEach(item => cy.get(`input[value="${item}"]`).check({ force: true }));
    
    cy.get('input[name="note"]').type('Zile basmayın');
    cy.get('.order-button').click();
    cy.contains('Zile basmayın').should('exist');

    cy.visit('http://localhost:5173/'); 
    cy.get('#order-pizza').click();
    cy.get('input[value="M"]').check({ force: true });
    cy.get('select[name^="crust"]').filter(':visible').select('thin');
    ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'].forEach(item => cy.get(`input[value="${item}"]`).check({ force: true }));
    
    cy.get('.order-button').click();
    cy.contains('Sipariş Notu:').should('not.exist');
  });
});