import React from 'react'
import './DrinkDetailsPage.css'
import PropTypes from 'prop-types'

const shortid = require('shortid')

const Ingredients = ({ ingredients }) => {
  const ingredientsList = ingredients.map(ingredient => {
    return (
      <li key={shortid.generate()}>{ingredient}</li>
    )
  })
  return (
    <ul>
      {ingredientsList}
    </ul>
  )
} 

Ingredients.propTypes = {
  ingredients: PropTypes.array
}

export default Ingredients