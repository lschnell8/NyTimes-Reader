describe('Home Page', () => {
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

  it('should display article cards', () => {
    cy.get('.articles-container').should('be.visible')
      .children().get('.article-card').should('be.visible')
  });

  it('each article card should contain a title, abstract overview, and an image ', () => {
    cy.get('.articles-container > .article-card').children()
      .get('.title-details').children().get('h3').get('p')
      .get('.thumbnail').children().get('img')
  });
});