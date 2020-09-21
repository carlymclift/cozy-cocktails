import React from 'react'
import './Bottles.css'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'

const shortid = require('shortid')

const Bottles = ({ searchForDrinks }) => {
  let bottles = [
    'vodka', 
    'gin', 
    'absinthe', 
    'tequila', 
    'everclear', 
    'whiskey', 
    'sambuca', 
    'irish_cream',
    'rum',
    'red_wine',
    'brandy',
    'champagne',
    'dry_vermouth',
    'sweet_vermouth',
    'triple_sec',
    'scotch'
  ]

  const bottleButtons = bottles.map(bottle => {
      return (
        <div key={shortid.generate()}>
          <div className={bottle} data-tip={bottle} id="bottles" role='button' onClick={() => searchForDrinks('/filter.php?i=', bottle)}></div>
          <ReactTooltip type="light" className="popup"/>
        </div>
      )
  })

  return (
    <div className="bottle-sec">
      {bottleButtons}
    </div>
  )
}

Bottles.propTypes = {
  searchForDrinks: PropTypes.func
}

export default Bottles