const apiKey = process.env.REACT_APP_API_KEY

export const getAllRecipes = async () => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/popular.php`)
  const data = await response.json()
  return data
}

export const getRandomDrink = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const data = await response.json()
  return data
}

export const getIndividualDrinkDetails = async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${id}`)
  const data = await response.json()
  return data
}

export const getRecipesBySearch = async (input) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?s=${input}`)
  const data = await response.json()
  return data
}

export const getRecipesByLetter = async (letter) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?f=${letter}`)
  const data = await response.json()
  return data
}

export const getRecipesByIngredient = async (drink) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${drink}`)
  const data = await response.json()
  return data
}