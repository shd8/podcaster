import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a title', () => {
    render(<Home />)

    const heading = screen.getByText('Get started by editing')

    expect(heading).toBeInTheDocument()
  })
})