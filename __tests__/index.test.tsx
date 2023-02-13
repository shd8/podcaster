import { render, screen } from '@testing-library/react'
import Landing from '@/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a title', () => {
    render(<Landing />)

    const heading = screen.getByText('Get started by editing')

    expect(heading).toBeInTheDocument()
  })
})