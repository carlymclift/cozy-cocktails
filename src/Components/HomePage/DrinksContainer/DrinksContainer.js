import React from 'react'
import DrinkCard from './DrinkCard'
import PropTypes from 'prop-types'

const DrinksContainer = ({ allDrinks, getDrinkDetails }) => {
  if (allDrinks) {
    const drinkCards = allDrinks.map(drink => {
      return (
        <DrinkCard 
          key={drink.idDrink}
          {...drink}
          getDrinkDetails={getDrinkDetails}
          />
      )
    })
    return (
      <div className="drink-container">
        {drinkCards}
      </div>
    )
  } else {
    return (
      <h2>no drinks match, please search for something else</h2>
    )
  }
}

DrinksContainer.propTypes = {
  allDrinks: PropTypes.array,
  getDrinkDetails: PropTypes.func
}

export default DrinksContainer