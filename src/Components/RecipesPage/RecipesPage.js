import React, { Component } from 'react'
import Bottles from './Bottles'
import ABCSearch from './ABCSearch'
import Search from './Search'
import Banner from './Banner'
import DrinksContainer from './DrinksContainer/DrinksContainer'
import { getDrinks } from '../../APIRequests'
import './RecipesPage.css'
import PropTypes from 'prop-types'

class RecipesPage extends Component {
  constructor() {
    super()
    this.state = {
      allDrinks: [],
      featuredDrink: {},
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const recipes = await getDrinks('/popular.php')
      this.setState({ allDrinks: recipes.drinks })
    } catch (error) {
      this.setState({ error: error })
    }
    this.getFeaturedDrink('archbishop')
  }

  getFeaturedDrink = async (drinkName) => {
    try {
      const result = await getDrinks(`/search.php?s=${drinkName}`)
      this.setState({ featuredDrink: result.drinks[0] })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  searchForDrinks = async (path, search) => {
    try {
      const results = await getDrinks(`${path}${search}`)
      this.setState({ allDrinks: results.drinks })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  render() {
    return (
      <section className="main-section">
        <Banner getDrinkDetails={this.props.getDrinkDetails} featuredDrink={this.state.featuredDrink} />
        <p className="find-your-favor-heading">Find Your Flavor</p>
        <p>filter by:</p>
        <Bottles searchByIngredient={this.searchForDrinks} />
        <ABCSearch searchByLetter={this.searchForDrinks} />
        <Search searchByName={this.searchForDrinks} />
        <DrinksContainer allDrinks={this.state.allDrinks} getDrinkDetails={this.props.getDrinkDetails} />
      </section>
    )
  }
}

RecipesPage.propTypes = {
  getDrinkDetails: PropTypes.func
}

export default RecipesPage