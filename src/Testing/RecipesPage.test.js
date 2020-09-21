import React from 'react'
import { fireEvent, render, screen, waitFor} from '@testing-library/react'
import Enzyme, { mount, shallow, shallowWithIntl} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16' 
import RecipesPage from '../Components/HomePage/RecipesPage'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { getDrinks } from '../APIRequests'
import testData from '../TestData/test-data'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
jest.mock('../APIRequests')

Enzyme.configure({ adapter: new Adapter() })

describe('RecipesPage', () => {

let drinks, mockFun, mockToggle

  beforeEach( () => {
    drinks = testData.drinks 
    mockFun = jest.fn()
    mockToggle = jest.fn()
    getDrinks.mockResolvedValue({drinks})

    render(
      <MemoryRouter>
        <RecipesPage 
          getDrinkDetails={mockFun}
          toggleButton={mockToggle}
          isOpen={true}
        />
      </MemoryRouter>
    )
  })

  it('Should render the correct content', () => {
    expect(screen.getByRole('button', { name: 'arrow close' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(47)
    expect(screen.getByRole('img', { name: 'arrow' })).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: 'Drink' })).toHaveLength(4)
    expect(screen.getByRole('link', { name: 'Drink Mojito'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Drink Old Fashioned'})).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Drink Long Island Tea'})).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(4)
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

  // it('Should get all drinks that match when a letter is clicked', () => {
    // const fakeFun = jest.spyOn(RecipesPage.prototype, 'searchForDrinks')
    // const wrapper = mount(<RecipesPage />)
    // wrapper.instance().searchForDrinks() 
    // const button = screen.getByRole('button', { name: 'a' })
    // button.simulate('click')
    // // expect(fakeFun).toHaveBeenCalledTimes(1)
    // expect(fakeFun.mock.calls.length).toEqual(1);

    // const wrapper = shallow(<RecipesPage getDrinkDetails={mockFun} toggleButton={mockToggle} isOpen={true}/>)
    // const button = screen.getByRole('button', { name: 'a' })
    // const instance = wrapper.instance()
    // const spy = jest.spyOn(instance, 'searchForDrinks')
    // instance.searchForDrinks()
    // button.simulate('click')
    // expect(spy).toHaveBeenCalled()
  // })
})