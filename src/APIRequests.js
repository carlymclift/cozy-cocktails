const apiKey = process.env.REACT_APP_API_KEY

export const getAllRecipes = async () => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/popular.php`)
  const data = await response.json()
  return data
}

export const getIndividualDrinkDetails = async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${id}`)
  const data = await response.json()
  return data
}