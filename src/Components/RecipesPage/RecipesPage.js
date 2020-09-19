import React, { Component } from 'react'
import Bottles from './Bottles'
import ABCSearch from './ABCSearch'
import Search from './Search'
import Banner from './Banner'
import DrinksContainer from './DrinksContainer/DrinksContainer'
import { getAllRecipes, getRecipesBySearch, getRecipesByLetter, getRecipesByIngredient } from '../../APIRequests'
import './RecipesPage.css'
import PropTypes from 'prop-types'

class RecipesPage extends Component {
  constructor() {
    super()
    this.state = {
      allDrinks: [],
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const recipes = await getAllRecipes()
      this.setState({ allDrinks: recipes.drinks })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  searchByName = async (input) => {
    try {
      const results = await getRecipesBySearch(input)
      this.setState({ allDrinks: results.drinks })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  searchByLetter = async (letter) => {
    try {
      const results = await getRecipesByLetter(letter)
      this.setState({ allDrinks: results.drinks })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  searchByIngredient = async (drink) => {
    try {
      const results = await getRecipesByIngredient(drink)
      this.setState({ allDrinks: results.drinks })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  render() {
    return (
      <section className="main-section">
        <Banner />
        <p className="find-your-favor-heading">Find Your Flavor</p>
        <p>filter by:</p>
        <Bottles searchByIngredient={this.searchByIngredient} />
        <ABCSearch searchByLetter={this.searchByLetter} />
        <Search searchByName={this.searchByName} />
        <DrinksContainer allDrinks={this.state.allDrinks} getDrinkDetails={this.props.getDrinkDetails} />
      </section>
    )
  }
}

RecipesPage.propTypes = {
  getDrinkDetails: PropTypes.func
}

export default RecipesPage