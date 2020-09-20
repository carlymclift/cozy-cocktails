import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, screen, waitFor } from '@testing-library/react'
import DrinkDetailsPage from '../Components/DrinkDetailsPage/DrinkDetailsPage'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { getIndividualDrinkDetails } from '../APIRequests'
import testData from '../TestData/test-data'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver
jest.mock('../APIRequests')

describe('App', () => {

let mockFun

  beforeEach( () => {
    mockFun = jest.fn()
    getIndividualDrinkDetails.mockResolvedValue(testData)

    render(
      <MemoryRouter>
        <DrinkDetailsPage
          selectedDrinkId={11000}
          findIngredients={mockFun}
        />
      </MemoryRouter>
    )
  })

  it('Should render the correct content', () => {
    expect(screen.getByRole('img', { name: 'Drink' })).toBeInTheDocument()
    expect(screen.getAllByRole('list')).toHaveLength(2) 
  })

  it('Should fetch the drink that matches the id', () => {
    expect(getIndividualDrinkDetails).toBeCalled()
  })

  it('Should render the selected drink info on load', async () => {    
    const drinkName = await waitFor( () => screen.getByText('Mojito'))
    expect(drinkName).toBeInTheDocument()
  })

  it('should call method during componentDidMount', () => {
    const fakeFun = jest.spyOn(DrinkDetailsPage.prototype, 'findIngredients');
    const wrapper = mount(<DrinkDetailsPage selectedDrinkId={11000} />);
    wrapper.instance().methodName();
    expect(fakeFun).toHaveBeenCalledTimes(1);
});
})