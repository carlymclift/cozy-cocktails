import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './Components/Header/Header'

class App extends Component {

  render() {
    return (
      <main>
        <Header />
      </main>
    )
  }
}

export default App
