import React from 'react'
import './Bottles.css'
import ReactTooltip from 'react-tooltip'
const shortid = require('shortid')

const Bottles = () => {
  let bottles = [
    'vodka', 
    'gin', 
    'absinthe', 
    'tequila', 
    'peppermint-schnapps', 
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
        <div key={shortid.generate()}>
          <div className={bottle} data-tip={bottle} id="bottles" role='button' ></div>
          <ReactTooltip type="info"/>
        </div>
      )
  })

  return (
    <div className="bottle-sec">
      {bottleButtons}
    </div>
  )
}

export default Bottles