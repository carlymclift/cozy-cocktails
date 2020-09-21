import React, { Component } from 'react'
import RecipesPage from './HomePage/RecipesPage'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import DrinkDetailsPage from './DrinkDetailsPage/DrinkDetailsPage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      selectedDrinkId: 0,
      isOpen: true
    }
    this.getDrinkDetails = this.getDrinkDetails.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
  }

  getDrinkDetails(id) {
    this.setState({ selectedDrinkId: id })
  }

  toggleButton() {
    this.setState(prevState => {
      return {
          isOpen: !prevState.isOpen
      }
    })
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
                toggleButton={this.toggleButton}
                isOpen={this.state.isOpen}
              />
            )
          }}
        />
        <Route
          exact path={`/drink-details/${this.state.selectedDrinkId}`}
          render={() => {
            return (
              <DrinkDetailsPage 
                selectedDrinkId={this.state.selectedDrinkId}
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
