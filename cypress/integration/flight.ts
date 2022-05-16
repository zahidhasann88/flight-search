describe('Flight', () => {
  it('Visits the flight list page', () => {
    cy.visit('http://localhost:4200');
    
    cy.contains('Fly Air').should('exist');

    cy.get("input[name='search']").click();
    cy.get('input[name="search"]').type('Emirates{enter}');

    cy.get('table').click();
    cy.get('#dataTable').click()
    cy.get('#dataTable').find('tr').should('be.visible');
    cy.get('table').contains('td', 'Emirates').should('be.visible');
    
    })
})

