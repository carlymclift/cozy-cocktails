import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import ABCSearch from '../Components/HomePage/Search/ABCSearch'
import '@testing-library/jest-dom'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

describe('ABCSearch', () => {
  let mockFun

  it('Should render the bottle images as buttons on load', () => {
    mockFun = jest.fn()
    render(
      <ABCSearch 
        searchForDrinks={mockFun}
      />
    )

    expect(screen.getAllByRole('button')).toHaveLength(26)
  })

  it('Should search for drinks when one of the letters is clicked', () => {
    mockFun = jest.fn()
    render(
      <ABCSearch 
        searchForDrinks={mockFun}
      />
    )
    
    const button = screen.getByRole('button', { name: 'a' })
    fireEvent.click(button)
    expect(mockFun).toHaveBeenCalled() 
  })
})