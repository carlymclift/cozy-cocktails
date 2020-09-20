import React from 'react'
import { render, screen, waitFor} from '@testing-library/react'
import App from '../App'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { getAllRecipes } from '../APIRequests'
import testData from './assets/TestData/test-data'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
jest.mock('./APIRequests')

describe('App', () => {

let drinks

  beforeEach( () => {
    drinks = testData.drinks 

    getAllRecipes.mockResolvedValue({drinks})

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
    expect(screen.getAllByRole('button')).toHaveLength(17)
    expect(screen.getAllByRole('link')).toHaveLength(6)
  })

  it('Should fetch a list of popular drinks when the app loads', () => {
    expect(getAllRecipes).toBeCalled()
  })

  it('Should render the most popular drinks cards on page load', async () => {    
    const drinkName = await waitFor( () => screen.getByText('Mojito'))
    expect(drinkName).toBeInTheDocument()
  })

  // it('Should fire a method when one of the recipes is clicked', () => {
  //   const mockFun = jest.fn()
  //   const allRecipes = screen.getAllByRole('img', { name: /drink/i })
  //   const clickedRecipe = allRecipes[0]
  //   fireEvent.click(clickedRecipe)
  //   expect(mockFun).toBeCalled(0)
  // })
})
