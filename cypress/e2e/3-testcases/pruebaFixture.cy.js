/// <reference types="cypress"/>

describe('User page', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('carritoDeCompra').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
      cy.log('This: ' + this.user)
    })
  
    // the test callback is in "function () { ... }" form
    it('has user', function () {
      // this.user exists
      cy.log('This: ' + this.user)
      expect(this.user.telefono1).to.equal('HTC Touch HD')
    })
  })