import React from 'react'
import './DrinksContainer.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DrinkCard = ({ idDrink, strDrink, strDrinkThumb, getDrinkDetails }) => {
  let id = +idDrink
  return (
    <Link style={{ textDecoration: 'none' }} to={`drink-details/${id}`} className="card-box">
      <div role="button" key={idDrink} className="Drink-Card" onClick={() => getDrinkDetails(id)}>
        <img className="Drink-card-image" alt="Drink" src={strDrinkThumb} />
      </div>
      <h2 className="drink-name-text">{strDrink}</h2>
    </Link>
  )
}

DrinkCard.propTypes = {
  idDrink: PropTypes.string,
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  getDrinkDetails: PropTypes.func
}

export default DrinkCard