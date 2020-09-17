import React from 'react'
import './RecipesPage.scss'
import PropTypes from 'prop-types'

let bottles = [
    'vodka', 
    'gin', 
    'absinthe', 
    'tequila', 
    'peppermint', 
    'whiskey', 
    'sambuca', 
    'irish-cream',
    'rum',
    'red-wine',
    'rum-cream',
    'champagne',
    'vermouth',
    'triple-sec'
]

const Bottles = () => {
  const bottleButtons = bottles.map(bottle => {
      return (
        <div className={bottle} id="bottles"></div>
      )
  })

  return (
    <div className="bottle-sec">
      {bottleButtons}
    </div>
  )
}

export default Bottles