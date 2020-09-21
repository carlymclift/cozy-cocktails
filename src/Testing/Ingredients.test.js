import React from 'react'
import { render, screen } from '@testing-library/react'
import Ingredients from '../Components/DrinkDetailsPage/Ingredients'
import '@testing-library/jest-dom'

describe('Instructions', () => {

  it('Should render a list with instructions', () => {
    render(
      <Ingredients 
        ingredients={[
          '2-3 oz Light rum', 
          'Juice of 1 Lime',
          '2 tsp Sugar',
          '2-4 Mint',
          'Soda water'
        ]}
      />
    )

    expect(screen.getByRole('list'))
  })
})