import React from 'react'
import { fireEvent, render, screen, waitFor} from '@testing-library/react'
import RecipesPage from './RecipesPage'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { getAllRecipes } from '../../APIRequests'
import testData from '../../assets/TestData/test-data'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
jest.mock('../../APIRequests')

describe('RecipesPage', () => {

let drinks, mockFun

  beforeEach( () => {
    drinks = testData.drinks 
    mockFun = jest.fn()
    getAllRecipes.mockResolvedValue({drinks})

    render(
      <MemoryRouter>
        <RecipesPage 
          allDrinks={drinks}
          getDrinkDetails={mockFun}
        />
      </MemoryRouter>
    )
  })

  it('Should render the correct content', () => {
    expect(screen.getByRole('heading', { name: 'Mojito'})).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Old Fashioned'})).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Long Island Tea'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Mojito Drink'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Old Fashioned Drink'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Long Island Tea Drink'})).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(17)
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('Should render the most popular drinks cards on page load', async () => {    
    const drinkName = await waitFor( () => screen.getByText('Mojito'))
    expect(drinkName).toBeInTheDocument()
  })

  it('Should fire a method when one of the recipes is clicked', () => {
    const allRecipes = screen.getAllByRole('img', { name: /Drink/i })
    const clickedRecipe = allRecipes[0]
    fireEvent.click(clickedRecipe)
    expect(mockFun).toHaveBeenCalled()
  })
})