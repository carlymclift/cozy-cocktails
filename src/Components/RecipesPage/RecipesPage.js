import React, { Component } from 'react'
import Bottles from './Bottles'
import DrinksContainer from './DrinksContainer/DrinksContainer'
import { getRandomDrink } from '../../APIRequests'
import './RecipesPage.css'
import PropTypes from 'prop-types'

class RecipesPage extends Component {
  constructor() {
    super()
    this.state = {
      featuredDrink: {},
      error: ''
    }
  }
  // async componentDidMount() {
  //   try {
  //     const randomDrink = await getRandomDrink()
  //     const drink = randomDrink.drinks[0]
  //     this.setState({ featuredDrink: drink })
  //   } catch (error) {
  //     this.setState({ error: error })
  //   }
  // }

  render() {
    return (
      <section className="main-section">
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
        <p className="find-your-favor-heading">Find your flavor</p>
        <Bottles />
        <DrinksContainer 
          allDrinks={this.props.allDrinks}
          getDrinkDetails={this.props.getDrinkDetails}
        />
      </section>
    )
  }
}

RecipesPage.propTypes = {
  allDrinks: PropTypes.array,
  getDrinkDetails: PropTypes.func
}

export default RecipesPage