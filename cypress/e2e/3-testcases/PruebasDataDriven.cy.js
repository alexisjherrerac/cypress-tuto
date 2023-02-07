/// <reference types="cypress"/>


//Suite de casos de pruebas
describe('Conjunto de casos de pruebas avanzados', function(){

    before(function(){
            //Cargarmos los valores desde el JSON
            cy.fixture('example').then(function(datos){
                this.datos = datos
                
            })
    })
    beforeEach(()=>{
        //Ingresamos a la pagina
        cy.visit('https://demoqa.com/automation-practice-form')
        

    })
    
    it('Llenamos nuestro primer formulario utilizando datos', function(){
        cy.get('#firstName').type(this.datos.nombre)
        cy.get('#lastName').type(this.datos.apellido)
        
    });


})