import {Given,When,Then,And} from "cypress-cucumber-preprocessor"

Given('El usuario se encuentra en la pagina de compra',()=>{
        // Ingresamos a la pagina
        cy.visit("https://testingcapitulovenezuela.club/abante");
})