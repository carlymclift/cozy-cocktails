import React from 'react'
import './DrinkDetailsPage.css'
const shortid = require('shortid')

const Instructions = ({ instructions }) => {
  console.log(instructions.split('.'))
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

export default Instructions