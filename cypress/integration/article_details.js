describe('Article details display', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should have a header', () => {
    cy.get('header').should('be.visible')
      .get('h1').contains('NY TIMES READER')
  });

  it('should display a full article after an article card is selected with an image, caption, title, author, published date, and a button', () => {
    cy.get('.articles-container > .article-card:nth-child(2)').click({ multiple: true })
    cy.get('.article-details').children()
      .get('.image-and-caption > img').should('be.visible')
      .get('.image-and-caption > .photo-caption').should('be.visible')
      .get('.title-and-more > h2').should('be.visible')
      .get('.title-and-more > .published').should('be.visible')
      .get('.title-and-more > button').should('be.visible')
  });

  it('should display a full article after an article card is selected with a button/link to the full article', () => {
    cy.get('.articles-container > .article-card:nth-child(2)').click()
    cy.get('main > .article-details > .title-and-more > button').click().request('https://www.nytimes.com/')
  });
});