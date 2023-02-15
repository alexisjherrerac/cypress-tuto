/// <reference types="cypress"/>


describe('Suite de casos de pruebas Avazandas ', function () {

    before(function(){

        //Cargarmos los valores desde el JSON
        cy.fixture("carrito").then(function(datos){

            this.datos = datos
                                      
        })

    })
    
    beforeEach(()=>{

        //Ingresar a la pagina de compra de alticulos
        cy.visit('https://demo.opencart.com/')
    })

    it('Compra de celular basado en su id', () => {
        
        cy.get('#menu ul a:contains("Phones & PDAs")').click();
        cy.get('h2').should('have.text','Phones & PDAs');

        //div[class='product-thumb']:has(.description) h4 a .button-group > button[data-bs-original-title^="Add to Cart"]
        //div[class='product-thumb']:has(.description):contains('HTC Touch HD') button[data-bs-original-title^="Add to Cart"]

        cy.log(this.datos.telefono1)
        cy.agregarElementoAlCarrito(this.datos.telefono1)
        cy.agregarElementoAlCarrito(this.datos.telefono2)
        cy.agregarElementoAlCarrito(this.datos.telefono3)

    });
    
})