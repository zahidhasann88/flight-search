describe('Flight booking app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/')
    })
  
    it('successfully orders a ticket', () => {
      cy.get('#form-departure')
        .should('be.visible')
        .type('MEI')
      cy.get('#form-arrival')
        .should('be.visible')
        .type('LHR')
        cy.get('#form-departureDate')
        .should('be.visible')
        .type('2022-05-12')
        cy.get('#form-returnDate')
        .should('be.visible')
        .type('2022-05-17')
      cy.get('button[type="submit"]')
        .should('be.visible')
        .click()
    })
  })