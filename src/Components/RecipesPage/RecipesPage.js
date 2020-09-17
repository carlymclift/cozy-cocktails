import React, { Component } from 'react'
import Bottles from './Bottles'
import DrinksContainer from './DrinksContainer/DrinksContainer'
import './RecipesPage.css'
import PropTypes from 'prop-types'

class RecipesPage extends Component {
  constructor(props) {
   super(props)
  }
  render() {
    // console.log(this.props)
    return (
      <section className="main-section">
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