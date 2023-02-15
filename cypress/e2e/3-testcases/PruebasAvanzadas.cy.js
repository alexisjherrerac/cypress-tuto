/// <reference types="cypress"/>


describe('Suite de casos de pruebas Avazandas ', function () {

    before(function () {
        //Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('carritoDeCompra').then((data) => {
          this.data = data
        })
        cy.log('This: ' + this.data)
    })

    beforeEach(()=>{
        //Ingresar a la pagina de compra de alticulos
        cy.visit('https://demo.opencart.com/')
        cy.log('This: ' + this.data.telefono1)

    })

    it('Compra de celular basado en su id', () => {
        
        cy.get('#menu ul a:contains("Phones & PDAs")').click();
        cy.get('h2').should('have.text','Phones & PDAs');

        //div[class='product-thumb']:has(.description) h4 a .button-group > button[data-bs-original-title^="Add to Cart"]
        //div[class='product-thumb']:has(.description):contains('HTC Touch HD') button[data-bs-original-title^="Add to Cart"]

        cy.log(this.data.telefono1)
        cy.agregarElementoAlCarrito(this.data.telefono1)
        cy.agregarElementoAlCarrito(this.data.telefono2)
        cy.agregarElementoAlCarrito(this.data.telefono3)

    });
    
})