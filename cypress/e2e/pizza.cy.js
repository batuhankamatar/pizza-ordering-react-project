describe('Pizza Sipariş Uygulaması Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Anasayfadan sipariş formuna gidebiliyor', () => {
    cy.get('#order-pizza').click();
    cy.url().should('include', '/pizza');
  });

  it('TÜM VARYASYONLAR: Biri bile eksikse buton disabled kalmalı', () => {
    cy.get('#order-pizza').click();
    
    // Durum 1: Her şey eksik
    cy.get('.order-button').should('be.disabled');

    // Durum 2: Sadece isim var (3+ karakter)
    cy.get('#name-input').type('Ahmet Yılmaz');
    cy.get('.order-button').should('be.disabled');

    // Durum 3: İsim ve Boyut var
    cy.get('input[value="M"]').check({ force: true });
    cy.get('.order-button').should('be.disabled');

    // Durum 4: İsim, Boyut ve Hamur var
    cy.get('select[name^="crust"]').filter(':visible').select('thin');
    cy.get('.order-button').should('be.disabled');

    // Durum 5: İsim, Boyut, Hamur var ama malzeme 4'ten az (2 tane seçiyoruz)
    cy.get('input[value="Pepperoni"]').check({ force: true });
    cy.get('input[value="Sosis"]').check({ force: true });
    cy.get('.order-button').should('be.disabled');

    // Durum 6: Malzeme 4 oldu ama İSİM 3 karakterden az kaldı (İsmi silip 2 harf yapıyoruz)
    cy.get('input[value="Mısır"]').check({ force: true });
    cy.get('input[value="Sucuk"]').check({ force: true });
    cy.get('#name-input').clear().type('Al'); 
    cy.get('.order-button').should('be.disabled');

    // Durum 7: HER ŞEY TAMAM (Final)
    cy.get('#name-input').type('i'); // 'Al' idi, 'Ali' oldu
    cy.get('.order-button').should('not.be.disabled');
  });

  it('Sipariş özeti ve adet kontrolü doğru çalışıyor mu?', () => {
    cy.get('#order-pizza').click();
    cy.contains('button', '+').click();
    cy.contains('button', '+').click();
    cy.get('.quantity-display').should('contain', '3');

    // Formu doldur (butonun aktifleşmesi için)
    cy.get('#name-input').type('Müşteri Adı');
    cy.get('input[value="M"]').check({ force: true });
    cy.get('select[name^="crust"]').filter(':visible').select('thin');
    const items = ["Pepperoni", "Sosis", "Mısır", "Sucuk"];
    items.forEach(item => cy.get(`input[value="${item}"]`).check({ force: true }));
    
    cy.get('.price-total').should('contain', '316.5');
  });

  it('Başarılı sipariş akışı (İsim ve Adet Dahil)', () => {
    cy.get('#order-pizza').click();
    cy.get('#name-input').type('Test Kullanıcısı');
    cy.get('input[value="L"]').check({ force: true });
    cy.get('select[name^="crust"]').filter(':visible').select('thick');
    
    const toppings = ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'];
    toppings.forEach(item => cy.get(`input[value="${item}"]`).check({ force: true }));
    
    cy.get('input[name="note"]').type('Acı olsun');
    cy.get('.order-button').click();

    cy.url().should('include', '/success');
    cy.contains('TEBRİKLER').should('exist');
    cy.contains('Test Kullanıcısı').should('exist'); // İsmi kontrol et
  });

  it('Maksimum 10 malzeme sınırı', () => {
    cy.get('#order-pizza').click();
    const items = ["Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan","Domates","Mısır","Sucuk","Sarımsak","Biber"];
    items.forEach(item => cy.get(`input[value="${item}"]`).check({ force: true }));

    // Diğer malzemeler kilitlenmeli
    cy.get('input[value="Kabak"]').should('be.disabled');
  });

  it('API isteği doğru verilerle (name dahil) gönderiliyor', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza').as('postOrder');

    cy.get('#order-pizza').click();
    cy.get('#name-input').type('Sipariş Veren');
    cy.get('input[value="M"]').check({ force: true });
    cy.get('select[name^="crust"]').filter(':visible').select('thin');
    
    ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'].forEach(item => 
        cy.get(`input[value="${item}"]`).check({ force: true })
    );
    
    cy.get('.order-button').click();

    cy.wait('@postOrder', { timeout: 10000 }).then((interception) => {
      expect(interception.request.body.name).to.equal('Sipariş Veren');
      expect(interception.request.body.toppings).to.include('Pepperoni');
    });

    cy.url().should('include', '/success');
  });
  
  it('Sipariş notu girildiğinde Success sayfasında görünmeli', () => {
    cy.get('#order-pizza').click();
    cy.get('#name-input').type('Not Denemesi');
    cy.get('input[value="M"]').check({ force: true });
    cy.get('select[name^="crust"]').filter(':visible').select('thin');
    ['Pepperoni', 'Sosis', 'Mısır', 'Sucuk'].forEach(item => cy.get(`input[value="${item}"]`).check({ force: true }));
    
    cy.get('input[name="note"]').type('Zile basmayın');
    cy.get('.order-button').click();
    cy.contains('Zile basmayın').should('exist');
  });
});