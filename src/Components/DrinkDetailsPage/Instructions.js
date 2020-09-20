import React from 'react'
import './DrinkDetailsPage.css'
import PropTypes from 'prop-types'

const shortid = require('shortid')

const Instructions = ({ instructions }) => {
  let x = instructions.split('.')
  x.pop()
  const instructionsList = x.map(instruction => {
    return (
      <li key={shortid.generate()}>{instruction}</li>
    )
  })
  return (
    <ol>
      {instructionsList}
    </ol>
  )
}

Instructions.propTypes = {
  instructions: PropTypes.string
}

export default Instructions