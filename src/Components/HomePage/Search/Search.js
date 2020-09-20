import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../RecipesPage.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
    this.updateInput = this.updateInput.bind(this)
    this.searchAndClearInputs = this.searchAndClearInputs.bind(this)
  }

  updateInput(event) {
    this.setState({ searchInput: event.target.value })
  }

  searchAndClearInputs(event) {
    event.preventDefault()
    this.props.searchForDrinks('/search.php?s=', this.state.searchInput)
    this.setState({ searchInput: '' })
  }

  render() {
    return(
      <form onSubmit={this.searchAndClearInputs}>
        <input className="search-input" type="text" placeholder="Search by name..." value={this.state.searchInput} onChange={this.updateInput} />
        <button className="search-button" >Search</button>
      </form>
    )
  }
}

Search.propTypes = {
  searchByName: PropTypes.func
}

export default Search