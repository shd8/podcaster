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
  it('should render and display expected content', () => {
    // Mount the React component for the About page
    cy.mount(mountComponent())

    // The new page should contain an h1 with "Podcaster" and be in Loading state
    cy.get('h1').contains('Podcaster')
    cy.get('p').contains('Loading ...')

    // The podcasts have to be loaded
    cy.get('[data-testid="counter"]').should('contain', '100')

    cy.get('li').first().contains('Author:')

    cy.get('a').first().click()    
  })
})
