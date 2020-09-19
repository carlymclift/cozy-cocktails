import React, { Component } from 'react'
import RecipesPage from './Components/RecipesPage/RecipesPage'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import DrinkDetailsPage from './Components/DrinkDetailsPage/DrinkDetailsPage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      drinkId: 0
    }
    this.getDrinkDetails = this.getDrinkDetails.bind(this)
  }

  getDrinkDetails(id) {
    this.setState({ drinkId: id })
  }

  render() {
    return (
      <>
      <Header />
      <main>
        <Route
          exact path = "/"
          render={() => {
            return (
              <RecipesPage
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
      <Footer />
      </>
    )
  }
}

export default App
