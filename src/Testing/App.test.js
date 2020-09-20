import React from 'react'
import { render, screen, waitFor} from '@testing-library/react'
import App from '../Components/App'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { getDrinks } from '../APIRequests'
import testData from '../TestData/test-data'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
jest.mock('../APIRequests')

describe('App', () => {

let drinks

  beforeEach( () => {
    drinks = testData.drinks 

    getDrinks.mockResolvedValue({drinks})

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it('Should render the correct content', () => {
    expect(screen.getByRole('heading', { name: 'Cozy Cocktails'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home'})).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(47)
    expect(screen.getAllByRole('banner')).toHaveLength(2)
    expect(screen.getByRole('button', { name: /arrow close/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(6)
  })

  it('Should fetch a list of popular drinks when the app loads', () => {
    expect(getDrinks).toBeCalled()
  })

  it('Should render the most popular drinks cards on page load', async () => {    
    const drinkName = await waitFor( () => screen.getByText('Mojito'))
    expect(drinkName).toBeInTheDocument()
  })

  // it('Should fire a method when one of the recipes is clicked', () => {
  //   const allRecipes = screen.getAllByRole('img', { name: /drink/i })
  //   const clickedRecipe = allRecipes[0]
  //   fireEvent.click(clickedRecipe)
  //   expect(mockFun).toHaveBeenCalledWith(11000)
  // })
})
