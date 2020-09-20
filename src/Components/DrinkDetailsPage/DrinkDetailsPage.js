import React, { Component } from 'react'
import { getIndividualDrinkDetails } from '../../APIRequests'
import Ingredients from './Ingredients'
import Instructions from './Instructions'
import './DrinkDetailsPage.css'
import PropTypes from 'prop-types'

class DrinkDetailsPage extends Component {
  constructor() {
    super()
    this.state = {
      drink: {},
      ingredients: []
    }
    this.putIngredientsTogether = this.putIngredientsTogether.bind(this)
  }

  async componentDidMount() {
    try {
      const drink = await getIndividualDrinkDetails(this.props.selectedDrinkId)
      this.setState({ drink: drink.drinks[0] })
    } catch (error) {
      this.setState({ error: error })
    }
    let ingredients = this.findIngredients('strIngredient')
    let measure = this.findIngredients('strMeasure')
    this.putIngredientsTogether(ingredients, measure)
  }

  findIngredients(strToSearch) {
    let result = []
    for (let i = 1; i < 16; i++) {
      let x = strToSearch + i
      let y = this.state.drink[x]
      if (y) {
        result.push(y)
      }
    }
    return result
  }

  putIngredientsTogether(item, measure) {
    let ingredients = []
    for (let i = 0; i < item.length; i++) {
        if(!measure[i]) {
          measure.push('')
        }
        let statement = measure[i] + item[i]
        ingredients.push(statement)
    }
    this.setState({ ingredients: ingredients })
  }

  render() {
    console.log(this.props)
    return (
      <div className="Drink-details-page">
        <div className="Drink-details-text-sec">
          <h2>{this.state.drink.strDrink}</h2>
          <Ingredients ingredients={this.state.ingredients}/>
          {this.state.drink.strInstructions &&
            <Instructions instructions={this.state.drink.strInstructions} />
          }
        </div>
        <div className="drink-details-image-card">
          <img className="Drink-details-image" alt="Drink" src={this.state.drink.strDrinkThumb} />
        </div>
      </div>
    )
  }
}

DrinkDetailsPage.propTypes = {
  selectedDrinkId: PropTypes.number
}

export default DrinkDetailsPage