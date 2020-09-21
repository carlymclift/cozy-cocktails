import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import DrinksCard from '../Components/HomePage/DrinksContainer/DrinkCard'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
jest.mock('../APIRequests')

describe('RecipesPage happy paths', () => {

let mockFun

  beforeEach( () => {
    mockFun = jest.fn()

    render(
      <MemoryRouter>
        <DrinksCard 
          idDrink={'11000'}
          strDrink={'Mojito'}
          strDrinkThumb={'https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg'}
          getDrinkDetails={mockFun}
        />
      </MemoryRouter>
    )
  })

  it('Should render the correct content on load', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mojito' })).toBeInTheDocument()
  })

  it('Should fire a method getting drink details when clicked', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockFun).toHaveBeenCalledTimes(1)
  })
})