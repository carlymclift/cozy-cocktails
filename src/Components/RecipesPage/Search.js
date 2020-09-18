import React, { Component } from 'react'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(event) {
    this.setState({ searchInput: event.target.value })
  }

  render() {
    return(
      <div>
        <input type="text" placeholder="Search by name..." onChange={this.updateInput} ></input>
        <button>Search</button>
      </div>
    )
  }
}

export default Search