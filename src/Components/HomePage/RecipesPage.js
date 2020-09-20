import React, { Component } from 'react'
import Bottles from './Search/Bottles'
import ABCSearch from './Search/ABCSearch'
import Search from './Search/Search'
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
      isOpen: true,
      error: ''
    }
    this.toggleButton = this.toggleButton.bind(this)
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

  toggleButton() {
    this.setState(prevState => {
      return {
          isOpen: !prevState.isOpen
      }
    })
  }

  render() {
    let btnTxt = this.state.isOpen ? 'close' : 'open'
    let arrow = this.state.isOpen ? 'https://www.flaticon.com/svg/static/icons/svg/892/892555.svg' : 'https://www.flaticon.com/svg/static/icons/svg/892/892498.svg'

    return (
      <section className="main-section">
        <div className="close-open-sec" onClick={this.toggleButton}>
          <img src={arrow} alt="arrow" className="arrow"></img>
          <p className="close-open-button">{btnTxt}</p>
        </div>
        {this.state.isOpen &&
        <Banner getDrinkDetails={this.props.getDrinkDetails} featuredDrink={this.state.featuredDrink} />
        }
        <p className="find-your-favor-heading">Find Your Flavor</p>
        <p>filter by:</p>
        <Bottles searchForDrinks={this.searchForDrinks} />
        <ABCSearch searchForDrinks={this.searchForDrinks} />
        <Search searchForDrinks={this.searchForDrinks} />
        <DrinksContainer allDrinks={this.state.allDrinks} getDrinkDetails={this.props.getDrinkDetails} />
      </section>
    )
  }
}

RecipesPage.propTypes = {
  getDrinkDetails: PropTypes.func
}

export default RecipesPage