// https://docs.cypress.io/api/introduction/api.html

describe('App.vue', () => {
  it('visits the app root url and checks if the nodes are loaded', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Fetch Nodes').click();
    cy.get('[data-cy=parent-nodes]').first().click();
    cy.get('[data-cy=nodes-data]').should('be.visible');
  })

  it('Checks if the popup is opened on click of the node', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Fetch Nodes').click();
    cy.get('[data-cy=parent-nodes]').first().click();
    cy.get('[data-cy=sidebar-popup]').should('be.visible');
  })

  it('Close the sidebar popup after opening', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Fetch Nodes').click();
    cy.get('[data-cy=parent-nodes]').first().click();
    cy.get('[data-cy=close-button]').first().click();
  })
})
