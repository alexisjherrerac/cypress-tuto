/// <reference types="cypress"/>



describe('Suite de casos de pruebas Avazandas ', function () {

    beforeEach(()=>{

        //Ingresar a la pagina de compra de alticulos
        cy.visit('https://demo.opencart.com/')
    })

    it('Compra de celular basado en su id', () => {
        cy.get('#menu ul a:contains("Phones & PDAs")').click()
        cy.get('h2').should('have.text','Phones & PDAs')

        //div[class='product-thumb']:has(.caption):contains('iPhone') button[onclick^='cart.add']
        
    });
    
})