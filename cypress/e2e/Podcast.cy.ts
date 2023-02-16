describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/podcast/1460157002')

    cy.get('h1').contains('Podcaster')
    cy.get('p').contains('Loading ...')

    cy.get('[data-testid="loading"]').should('exist')
    cy.intercept('https://itunes.apple.com/**').as('itunesCall')

    cy.get('[data-testid="loading"]').should('exist')

    cy.wait('@itunesCall')

    cy.get('p').contains('Episodes: 51')

    cy.get('[data-testid="episodes-list"]').children().should('exist')


  })
})

export {}