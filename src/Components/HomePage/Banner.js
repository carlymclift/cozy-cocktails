import React from 'react'
import './RecipesPage.css'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'

const Banner = ({ getDrinkDetails, featuredDrink }) => {
  let id = +featuredDrink.idDrink

  return (
    <div className="featured-drink-container">
      <img 
        className="banner-background" 
        data-tip data-for='global' 
        alt="Drink" 
        src="https://images.unsplash.com/photo-1530578294319-9d6b376c11ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2879&q=80" >
      </img>
      <div className="banner-heading">
        <p className="banner-heading-text-one">featured drink:</p>
        <h2 className="banner-heading-text-two">{featuredDrink.strDrink}</h2>
      </div>
      <Link style={{ textDecoration: 'none' }} to={`drink-details/${id}`} onClick={ () => getDrinkDetails(id) } >
      <div className="featured-drink-box" >
        <p className="featured-drink-text-one">Ingredients:</p>
        <p className="featured-drink-text-two">gin, wine, benedictine, lime</p>
        <div className="featured-drink-image"></div>
      </div>
      </Link>
      <ReactTooltip 
        id='global' 
        className="arrow-popup"
        aria-haspopup='true' 
        effect='solid' type='light' 
        offset={{bottom: 20, top: -600}}>
        <div className="arrow-popup"></div>
      </ReactTooltip>
    </div>
  )
}

Banner.propTypes = {
  getDrinkDetails: PropTypes.func,
  featuredDrink: PropTypes.object
}

export default Banner