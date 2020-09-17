import React, { Component } from 'react'
import Bottles from './Bottles'
import DrinksContainer from './DrinksContainer/DrinksContainer'
import './RecipesPage.css'

class RecipesPage extends Component {
  render() {
    return (
      <section className="main-section">
        <Bottles />
      </section>
    )
  }
}

export default RecipesPage