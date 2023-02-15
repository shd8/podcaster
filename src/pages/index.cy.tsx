// pages/about.cy.js
import Home from './index'
import { Provider } from 'react-redux'
import { setupStore } from '@/store'

const mountComponent = () => (
  <Provider store={setupStore()}>
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

    // The podcasts have to be loaded
    cy.get('[data-testid="counter"]').should('contain', '100')

    cy.get('li').first().contains('Author:')

    cy.get('li').first().within(() => {
        cy.get('a').should('exist')
      })
    })

  it('Should filter for author or podcast name', () => {
    cy.mount(mountComponent())

    cy.get('input').type('Conde')

    cy.get('ul').children().should('have.length', '1')
    cy.get('[data-testid="counter"]').should('contain', '1')

    cy.get('input').clear()
    cy.get('input').type('CoN')

    cy.get('ul').children().should('have.length', '3')
    cy.get('[data-testid="counter"]').should('contain', '3')
  })
})
