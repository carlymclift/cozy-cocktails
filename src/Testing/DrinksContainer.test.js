import React from 'react'
import { fireEvent, render, screen, waitFor} from '@testing-library/react'
import DrinksContainer from '../Components/HomePage/DrinksContainer/DrinksContainer'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { getDrinks } from '../APIRequests'
import testData from '../TestData/test-data'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
jest.mock('../APIRequests')

describe('RecipesPage happy paths', () => {

let drinks, mockFun

  beforeEach( () => {
    drinks = testData.drinks 
    mockFun = jest.fn()
    getDrinks.mockResolvedValue({drinks})

    render(
      <MemoryRouter>
        <DrinksContainer 
          allDrinks={drinks}
          getDrinkDetails={mockFun}
        />
      </MemoryRouter>
    )
  })

  it('Should render the correct content on load', () => {
    expect(screen.getAllByRole('button')).toHaveLength(3)
    expect(screen.getAllByRole('img', { name: 'Drink' })).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Drink Mojito'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Drink Old Fashioned'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Drink Long Island Tea'})).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(3)
    expect(screen.getByRole('heading', { name: 'Mojito'})).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Old Fashioned'})).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Long Island Tea'})).toBeInTheDocument()
  })

  it('Should render the most popular drinks cards on page load', async () => {    
    const mojito = await waitFor( () => screen.getByText('Mojito'))
    const oldFashioned = await waitFor( () => screen.getByText('Old Fashioned'))
    const tea = await waitFor( () => screen.getByText('Long Island Tea'))

    expect(mojito).toBeInTheDocument()
    expect(oldFashioned).toBeInTheDocument()
    expect(tea).toBeInTheDocument()
  })

  it('Should fire a method getting drink details when one of the recipes is clicked', () => {
    const allRecipes = screen.getAllByRole('img', { name: /Drink/i })
    const clickedRecipe = allRecipes[1]
    fireEvent.click(clickedRecipe)
    expect(mockFun).toHaveBeenCalledTimes(1)
  })
})

describe('RecipesPage, sad path', () => {

  it('Should show a message if no results come up for a search', () => {
    let drinks = undefined
    let mockFun = jest.fn()    
    getDrinks.mockResolvedValue({drinks})  
    render(
      <MemoryRouter>
        <DrinksContainer 
          allDrinks={drinks}
          getDrinkDetails={mockFun}
        />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', ({ name: 'no drinks match, please search for something else' })))
      .toBeInTheDocument()
  })
})

