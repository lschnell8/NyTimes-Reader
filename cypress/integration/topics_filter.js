describe('Topics sorting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should have a header', () => {
    cy.get('header').should('be.visible')
      .get('h1').contains('NY TIMES READER')
  });

  it('should display a list of article topics with 26 options', () => {
    cy.get('.article-topics').should('be.visible')
      .get('.article-topics > h2').contains('Topics')
      .get('.article-topics > nav').children().should('have.length', 26)
  });

  it('should filter through the articles when a topic is selected', () => {
    cy.get('.article-topics > nav > a:nth-child(1)').click()
      .visit('http://localhost:3000/arts')
    cy.get('.article-topics > nav > a:nth-child(2)').click()
      .visit('http://localhost:3000/automobiles')
    cy.get('.article-topics > nav > a:nth-child(3)').click()
      .visit('http://localhost:3000/books')
  });
});