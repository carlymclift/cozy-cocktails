import React from 'react'
import './RecipesPage.css'
const shortid = require('shortid')

const ABCSearch = ({ searchByLetter }) => {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const letterButtons = letters.map(letter => {
    return (
      <button className="letter-button" key={shortid.generate()} value={letter} onClick={() => searchByLetter(letter)}>{letter}</button>
    )
  })

  return (
    <div className="letter-sec">
      {letterButtons}
    </div>
  )
}

export default ABCSearch