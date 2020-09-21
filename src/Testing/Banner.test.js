import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16' 
import Banner from '../Components/HomePage/Banner'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import MutationObserver from '@sheerun/mutationobserver-shim'
import ReactTooltip from 'react-tooltip'
import testData from '../TestData/test-data'
window.MutationObserver = MutationObserver

Enzyme.configure({ adapter: new Adapter() })

describe('Banner', () => {
  let mockFun, drink

  it('Should render the banner content on load', () => {
    mockFun = jest.fn()
    drink = testData.drinks[0]
    render(
      <MemoryRouter>
        <Banner
          getDrinkDetails={mockFun}
          featuredDrink={drink}
          />
      </MemoryRouter>
    )

    expect(screen.getByRole('img', { name: 'Drink' })).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByText('featured drink:')).toBeInTheDocument()
  })

  it('Should get drink details when the featured drink is clicked', () => {
    mockFun = jest.fn()
    drink = testData.drinks[0]
    render(
      <MemoryRouter>
        <Banner
          getDrinkDetails={mockFun}
          featuredDrink={drink}
          />
      </MemoryRouter>
    )
    
    const button = screen.getByRole('link')
    fireEvent.click(button)
    expect(mockFun).toHaveBeenCalled() 
  })

  it('Should render an arrow on hover', () => {
    mockFun = jest.fn()
    drink = testData.drinks[0]
     const wrapper = mount(
      <MemoryRouter>
        <Banner
          getDrinkDetails={mockFun}
          featuredDrink={drink}
        >
          <div
              data-for='global' />
          <ReactTooltip
              class='.arrow-popup' />
        </Banner>
      </MemoryRouter>
    );
    
    expect(wrapper.find(<ReactTooltip />).exists).toBeTruthy()
    expect(wrapper.find('.arrow-popup').length).toBe(2)

    document.body.innerHTML = wrapper.getDOMNode().innerHTML

    setTimeout(() => {
        document.body.firstChild.dispatchEvent(new Event('hover'))
        wrapper.update();
        const over = wrapper.find('.arrow-popup')

        expect(over.length).toBe(1);

        document.body.innerHTML = ''
    }, 200)
  })
})