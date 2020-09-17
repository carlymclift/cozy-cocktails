import React from 'react'
import './Bottles.css'

const Bottles = () => {
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