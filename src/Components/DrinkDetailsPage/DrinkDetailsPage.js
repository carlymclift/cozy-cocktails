import React, { Component } from 'react'
import { getIndividualDrinkDetails } from '../../APIRequests'

class DrinkDetailsPage extends Component {
  constructor() {
    super()
    this.state = {
      drink: {}
    }
  }

  async componentDidMount() {
    try {
      const drink = await getIndividualDrinkDetails(this.props.drinkId)
      this.setState({ drink: drink.drinks })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  render() {
    return (
      <div className="Drink-details-page">
        <h2>{this.state.drink.strDrink}</h2>
        <p>Glass to use: {this.state.drink.strGlass}</p>
        <p>{this.state.drink.strInstructions}</p>
        <img className="Drink-image" alt="Drink" src={this.state.drink.strDrinkThumb} />
      </div>
    )
  }
}

export default DrinkDetailsPage