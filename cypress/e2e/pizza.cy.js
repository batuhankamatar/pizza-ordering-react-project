describe('Pizza Sipariş Uygulaması Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5178/');
  });

  it('Anasayfadan sipariş formuna gidebiliyor', () => {
    cy.get('#order-pizza').click();
    cy.url().should('include', '/pizza');
  });

  it('Form validasyonları: Malzeme sayısı 4ten azken buton disabled olmalı', () => {
    cy.get('#order-pizza').click();

    cy.get('#size-M').check();
    cy.get('#crust-select').select('thin');

    cy.get('input[value="Pepperoni"]').check();
    cy.get('input[value="Sosis"]').check();

    cy.get('.order-button').should('be.disabled');

    cy.get('input[value="Mısır"]').check();
    cy.get('input[value="Sucuk"]').check();
    cy.get('.order-button').should('not.be.disabled');
  });

  it('Sipariş özeti ve adet kontrolü doğru çalışıyor mu?', () => {
    cy.get('#order-pizza').click();
    

    cy.contains('button', '+').click();
    cy.contains('button', '+').click();

    cy.get('.quantity-display').should('contain', '3');

    cy.get('input[value="Pepperoni"]').check();
    cy.get('input[value="Sosis"]').check();
    cy.get('input[value="Mısır"]').check();
    cy.get('input[value="Sucuk"]').check();
    
    cy.get('.price-total').should('contain', '316.5');
  });

  it('Başarılı sipariş akışı', () => {
    cy.get('#order-pizza').click();
    cy.get('#size-L').check();
    cy.get('#crust-select').select('thick');
    
    const toppings = ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'];
    toppings.forEach(item => cy.get(`input[value="${item}"]`).check());
    
    cy.get('input[name="note"]').type('Acı olsun');
    cy.get('.order-button').click();

    cy.url().should('include', '/success');
    cy.contains('TEBRİKLER').should('be.visible');
  });

  it('Maksimum 10 malzeme sınırı', () => {
    cy.get('#order-pizza').click();
    const items = ["Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan","Domates","Mısır","Sucuk","Jalepeno","Sarımsak"];
    items.forEach(item => cy.get(`input[value="${item}"]`).check());

    cy.get('input[value="Kabak"]').should('be.disabled');
  });
});