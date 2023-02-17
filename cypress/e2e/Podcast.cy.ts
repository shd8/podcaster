describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/podcast/1460157002')
    
    cy.get('[data-testid="loading"]').should('exist')

    cy.get('h1').contains('Podcaster')

    cy.intercept('GET', 'https://itunes.apple.com/**', { statusCode: 200 }).as('itunesCall')

    cy.wait('@itunesCall')

    cy.get('span').contains('Episodes: 50')

    cy.get('[data-testid="episodes-list"]').children().should('exist')
  })
})

export {}