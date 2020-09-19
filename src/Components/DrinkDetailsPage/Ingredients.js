import React from 'react'
import './DrinkDetailsPage.css'
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

export default Ingredients