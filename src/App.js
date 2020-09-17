import React, { Component } from 'react'
import logo from './logo.svg'
import RecipesPage from './Components/RecipesPage/RecipesPage'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Route
          exact path = "/"
          render={() => {
            return (
              <RecipesPage
                
              />
            );
          }}
        />
      </main>
    )
  }
}

export default App
