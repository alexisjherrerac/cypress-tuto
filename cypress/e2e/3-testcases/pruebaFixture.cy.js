/// <reference types="cypress"/>

describe('User page', () => {
    before(function () {
      // "this" points at the test context object
      cy.fixture('carritoDeCompra').then((data) => {
        // "this" is still the test context object
        this.data = data
      })
    })

    beforeEach(()=>{
        //Ingresar a la pagina de compra de alticulos
        cy.visit('https://demo.opencart.com/')
        cy.log('This: ' + this.data)

    })
  
    // the test callback is in "function () { ... }" form
    it('has user', function () {
      // this.user exists
      cy.log('This: ' + this.data) 
    })

    it('Caso numero 2', function () {
        // this.user exists
        cy.log('This: ' + this.data)

        cy.get('#menu ul a:contains("Phones & PDAs")').click();
        cy.get('h2').should('have.text','Phones & PDAs');

        this.data.articulo.forEach((articulo) => {
            cy.agregarElementoAlCarrito(articulo)          
            cy.log(articulo)
        });
   
    })

  })