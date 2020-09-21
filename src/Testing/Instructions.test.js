import React from 'react'
import { render, screen } from '@testing-library/react'
import Instructions from '../Components/DrinkDetailsPage/Instructions'
import '@testing-library/jest-dom'

describe('Instructions', () => {

  it('Should render a list with instructions', () => {
    render(
      <Instructions 
        instructions={'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange twist, and a cocktail cherry.'}
      />
    )

    expect(screen.getByRole('list'))
  })
})