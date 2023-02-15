/// <reference types="cypress"/>


describe('Suite de casos de pruebas Avazandas ', function () {

    beforeEach(()=>{

        //Ingresar a la pagina de compra de alticulos
        cy.visit('https://demo.opencart.com/')
    })

    it('Compra de celular basado en su id', () => {
        cy.get('#menu ul a:contains("Phones & PDAs")').click()
        cy.get('h2').should('have.text','Phones & PDAs')

        //div[class='product-thumb']:has(.caption) h4 a button[onclick^='cart.add']
        cy.get("div[class='product-thumb']").as('contenedorDeProductos')

        cy.get("@contenedorDeProductos")
            .each(($el,index, $list) =>{

                cy.get(':has(.description) h4 a').eq(index).then(function($el1){
                    let producto = $el1.text()
                    cy.log(producto)

                    if (producto.includes('HTC Touch HD')) {
                        cy.log('Se ha encontrado el elemento buscado')
                        cy.get('@contenedorDeProductos .button-group').eq(index).contains('Add to Cart').click()
                       
                                
                    } else {
                        cy.log('No consiguio el producto')                             
                    }
    
                })

        })
    });
    
})