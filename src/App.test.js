import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { getAllRecipes } from './APIRequests'
jest.mock('./APIRequests')

describe('App', () => {

  beforeEach( () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it('Should render the correct content', () => {
    expect(screen.getByRole('heading', { name: 'Cozy Cocktails'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Login'})).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(14)
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('Should render a list of popular drinks when the app loads', () => {
    getAllRecipes.mockResolvedValueOnce({
      drinks: 
    })
  })
})
