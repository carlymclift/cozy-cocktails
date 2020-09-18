import React, { Component } from 'react'
import RecipesPage from './Components/RecipesPage/RecipesPage'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import { getAllRecipes } from './APIRequests'
import DrinkDetailsPage from './Components/DrinkDetailsPage/DrinkDetailsPage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allDrinks: [],
      error: '',
      drinkId: 0
    }
    this.getDrinkDetails = this.getDrinkDetails.bind(this)
  }

  async componentDidMount() {
    try {
      const recipes = await getAllRecipes()
      this.setState({ allDrinks: recipes.drinks })
    } catch (error) {
      this.setState({ error: error })
    }
  }

  getDrinkDetails(id) {
    this.setState({ drinkId: id })
  }

  render() {
    return (
      <main>
        <Header />
        <Route
          exact path = "/"
          render={() => {
            return (
              <RecipesPage
                allDrinks={this.state.allDrinks}
                getDrinkDetails={this.getDrinkDetails}
              />
            )
          }}
        />
        <Route
          exact path={`/drink-details/${this.state.drinkId}`}
          render={() => {
            return (
              <DrinkDetailsPage 
                drinkId={this.state.drinkId}
              />
            )
          }}
        />
        
      </main>
    )
  }
}

export default App
