import React from 'react'
import DrinkCard from './DrinkCard'
import PropTypes from 'prop-types'

const DrinksContainer = ({ allDrinks, getDrinkDetails }) => {
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
    <div>
      {drinkCards}
    </div>
  )
}

DrinksContainer.propTypes = {
  allDrinks: PropTypes.array,
  getDrinkDetails: PropTypes.func
}

export default DrinksContainer