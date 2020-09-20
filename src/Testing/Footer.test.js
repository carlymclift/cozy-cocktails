import React from 'react'
import { render, screen, waitFor} from '@testing-library/react'
import Footer from '../Components/Footer/Footer'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

describe('Header', () => {

  beforeEach( () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
  })

  it('Should render the correct content', () => {
    expect(screen.getByText('please drink responsibly.')).toBeInTheDocument()
  })
})