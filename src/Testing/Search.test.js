import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Search from '../Components/HomePage/Search/Search'
import '@testing-library/jest-dom'
import MutationObserver from '@sheerun/mutationobserver-shim'
window.MutationObserver = MutationObserver

describe('Search', () => {
  let mockFun

  it('Should render the search input and button content on load', () => {
    mockFun = jest.fn()
    render(
      <Search
        searchForDrinks={mockFun}
      />
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('Should have input hold its value when interacted with', () => {
    const setup = () => {
        const utils = render(<Search searchForDrinks={mockFun} />)
        const input = utils.getByPlaceholderText('Search by name...')
        return {
          input,
          ...utils,
        }
      }

    const { input } = setup()
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'Margarita' } })
    expect(input.value).toBe('Margarita')
  })

  it('Should be able to search input, then clear input', () => {
    render(<Search
        searchForDrinks={mockFun}
    />)

    const input = screen.getByPlaceholderText('Search by name...')
    const button = screen.getByRole('button', {name: 'Search'})
    fireEvent.change(input, { target: { value: 'Margarita' } })
    fireEvent.click(button)

    expect(mockFun).toBeCalledTimes(1)
    expect(mockFun).toHaveBeenCalledWith('/search.php?s=', 'Margarita')

    const input2 = screen.getByPlaceholderText('Search by name...')
    expect(input2.value).toBe('')
  })
})