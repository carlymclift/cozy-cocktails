import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16' 
import Bottles from '../Components/HomePage/Search/Bottles'
import '@testing-library/jest-dom'
import MutationObserver from '@sheerun/mutationobserver-shim'
import ReactTooltip from 'react-tooltip'
window.MutationObserver = MutationObserver

Enzyme.configure({ adapter: new Adapter() })

describe('Bottles', () => {
  let mockFun

  it('Should render the bottle images as buttons on load', () => {
    mockFun = jest.fn()
    render(
      <Bottles 
        searchForDrinks={mockFun}
      />
    )

    expect(screen.getAllByRole('button')).toHaveLength(16)
  })

  it('Should search for drinks when one of the bottles is clicked', () => {
    mockFun = jest.fn()
    render(
      <Bottles 
        searchForDrinks={mockFun}
      />
    )
    
    const allButtons = screen.getAllByRole('button')
    const clickedBottle = allButtons[0]
    fireEvent.click(clickedBottle)
    expect(mockFun).toHaveBeenCalled() 
  })

  it('Should render the name on hover', () => {
    const wrapper = mount(
        <Bottles>
            <div
                data-tip='vodka' />
            <ReactTooltip
                name={'vodka'} />
        </Bottles>
    );
    
    expect(wrapper.find(<ReactTooltip />).exists).toBeTruthy()
    expect(wrapper.find('.popup').length).toBe(16)

    document.body.innerHTML = wrapper.getDOMNode().innerHTML

    setTimeout(() => {
        document.body.firstChild.dispatchEvent(new Event('hover'))
        wrapper.update();

        const over = wrapper.find('.popup')

        expect(over.length).toBe(1);
        expect(over.text()).toBe('vodka')

        document.body.innerHTML = ''
    }, 200)
  })
})