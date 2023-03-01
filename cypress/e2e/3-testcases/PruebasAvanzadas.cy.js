/// <reference types="cypress"/>

describe('Tercer feature de casos avanzados', function () {
    before(function () {
        //Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('carritoDeCompra').then(function (datos) {
            this.datos = datos
        })
    })
    beforeEach(() => {
        //ingresar a la pagina de compra de articulos tecnologicos
        cy.visit(Cypress.env('baseUrl') + "/index.php")
    })

    it('Compra de celular basado en su id', function()  {
        
        cy.get('#menu ul a:contains("Phones & PDAs")').click();
        cy.get('h2').should('have.text','Phones & PDAs');

        //div[class='product-thumb']:has(.description) h4 a .button-group > button[data-bs-original-title^="Add to Cart"]
        //div[class='product-thumb']:has(.description):contains('HTC Touch HD') button[data-bs-original-title^="Add to Cart"]
        cy.log('This: ' + this.data.articulo)

        this.data.articulo.forEach((articulo) => {
            cy.agregarElementoAlCarrito(articulo)          
            cy.log(articulo)
        });
        
    });
    
})