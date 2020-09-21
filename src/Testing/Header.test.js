import React from 'react'
import { render, screen, waitFor} from '@testing-library/react'
import Header from '../Components/Header/Header'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

describe('Header', () => {

  beforeEach( () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
  })

  it('Should render the correct content', () => {
    expect(screen.getByRole('heading', { name: 'Cozy Cocktails'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Cozy Cocktails'})).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })
})