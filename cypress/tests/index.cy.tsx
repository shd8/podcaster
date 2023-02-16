// pages/about.cy.js
import { Provider } from 'react-redux'
import { setupStore } from '@/store'
import Home from '@/pages'
import Header from '@/components/Header'

const mountComponent = () => (
  <Provider store={setupStore()}>
    <Header />
    <Home />
  </Provider>
)

describe('<Home />', () => {
  it('Should render and display expected content', () => {
    // Mount the React component for the About page
    cy.mount(mountComponent())

    // The new page should contain an h1 with "Podcaster" and be in Loading state
    cy.get('h1').contains('Podcaster')
    cy.get('p').contains('Loading ...')
    cy.get('[data-testid="loading"]').should('exist')

    // The podcasts have to be loaded
    cy.get('[data-testid="counter"]').should('contain', '100')

    cy.get('li').first().contains('Author:')

    cy.get('li').first().within(() => {
        cy.get('a').should('exist')
      })
    })

  it('Should filter for author or podcast name', () => {
    cy.mount(mountComponent())

    cy.get('[data-testid="counter"]').should('contain', '100')

    cy.get('input').type('Conde')

    cy.get('ul').children().should('have.length', '1')
    cy.get('[data-testid="counter"]').should('contain', '1')

    cy.get('input').clear()
    cy.get('input').type('CoN')

    cy.get('ul').children().should('have.length.greaterThan', 1)
    cy.get('[data-testid="counter"]').should('not.contain.value', '1')
  })
})
