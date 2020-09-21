import React from 'react'
import '../RecipesPage.css'
import PropTypes from 'prop-types'

const shortid = require('shortid')

const ABCSearch = ({ searchForDrinks }) => {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const letterButtons = letters.map(letter => {
    return (
      <button className="letter-button" key={shortid.generate()} value={letter} onClick={() => searchForDrinks('/search.php?f=', letter)}>{letter}</button>
    )
  })

  return (
    <div className="letter-sec">
      {letterButtons}
    </div>
  )
}

ABCSearch.propTypes = {
  searchForDrinks: PropTypes.func
}

export default ABCSearch