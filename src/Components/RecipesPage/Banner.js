import React from 'react'
import './RecipesPage.css'

const Banner = () => {
  return (
    <div className="featured-drink-container">
      <img className="banner-background" alt="Drink" src="https://images.unsplash.com/photo-1530578294319-9d6b376c11ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2879&q=80" ></img>
      <div className="banner-heading">
        <p className="banner-heading-text-one">featured drink:</p>
        <h2 className="banner-heading-text-two">archbishop</h2>
      </div>
      <div className="featured-drink-box">
        <p className="featured-drink-text-one">Ingredients:</p>
        <p className="featured-drink-text-two">gin, wine, benedictine, lime</p>
        <div className="featured-drink-image"></div>
      </div>
    </div>
  )
}

export default Banner