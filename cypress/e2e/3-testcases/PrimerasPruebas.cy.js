/// <reference types="cypress"/>

//Suite de casos de pruebas
describe('Primer conjunto de pruebas', function(){

    beforeEach(()=>{
        // Abrir la pagina
        cy.visit("https://automationexercise.com/")

    })
/*
    //Caso de prueba 1
    it('Contabilizar cantidad de elementos en la pagina', function(){
        

        
        // Verificar cantidad de elementos
        cy.get('.features_items .product-image-wrapper').should('have.length',34)

        // Obtener elementos como parametros
        cy.get('.features_items .product-image-wrapper').as('ProductosPopulares')

        // Verificamos nuevamente la cantidad de elementos usando el parametro
        cy.get('@ProductosPopulares').should('have.length',34)


    }    
    )

    //Caso de prueba 2

    it('Agregar un elemento al carrito desde la pagina principal',function() {
        
        // Obtener elementos como parametros
        cy.get('.features_items .product-image-wrapper').as('ProductosPopulares')

        // Iteramos para obtener un producto por nombre X
        cy.get('@ProductosPopulares')
        .find('.productinfo p')
        .each(($el,index, $list) =>{

            cy.get('@ProductosPopulares').eq(index).find('h2').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)
            })

            if ($el.attr('.productinfo p') === 'Blue Top') {
                cy.log('Se ha encontrado el elemento')     
                cy.log('Se ha encontrado el precio') 
                cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
                cy.get('u')
                        
            } else {
                cy.log('No consiguio el producto') 
                      
            }

        })
        cy.get('.modal-body > :nth-child(1)')
        .should('contain.text','Your product has been added to cart.')
        .should('be.visible')        

    })
*/
    //Caso de prueba 3
    it('Verificamos que el Dropdown tenga los elementos previstos', () => {
        
      
        cy.get('.features_items .product-image-wrapper').as('ProductosPopulares')

        // Iteramos para obtener un producto por nombre X
        cy.get('@ProductosPopulares')
        .find('.productinfo p')
        .each(($el,index, $list) =>{
            var titulo = ''
            var precio = ''
            cy.get('@ProductosPopulares').eq(index).find('h2').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)
            })

            cy.get('@ProductosPopulares').eq(index).find('p').then(function($el2){
                let titulo = $el2.text()
                cy.log(titulo)
            })

            if ($el.attr('.productinfo p') === 'Blue Top') {
                cy.log('Se ha encontrado el elemento')     
                cy.log('Se ha encontrado el precio') 
                cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
                cy.get('u')
                        
            } else {
                cy.log('No consiguio el producto') 
                      
            }

        })

        
    });

})