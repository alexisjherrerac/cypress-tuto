Feature: Primer conjunto de pruebas de pasgina de compras

    Este feature esta siendo adaptado de Cypress a Cucumber

    Scenario: Crear una compra desde 0
    Given el usuario se encuentra en la pagina de compra
    And busca Blouse en la pagina de compra
    When agrega una blusa al carrito
    Then el valor del alticulo es 27.00 dolares
    When Finaliza la compra de articulos
    Then el mensaje de orden completada debe aparecer

