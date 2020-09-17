import React from 'react'
import './DrinksContainer.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DrinkCard = ({ idDrink, strDrink, strDrinkThumb, getDrinkDetails }) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={`drink-details/{idDrink}`}>
      <div role="button" className="Drink-Card" key={idDrink} onClick={() => getDrinkDetails(idDrink)}>
        <h2>{strDrink}</h2>
        <img className="Drink-card-image" alt="Drink" src={strDrinkThumb} />
      </div>
    </Link>
  )
}

DrinkCard.propTypes = {
  idDrink: PropTypes.number,
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  getDrinkDetails: PropTypes.func
}

export default DrinkCard