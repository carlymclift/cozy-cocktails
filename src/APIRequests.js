const apiKey = process.env.REACT_APP_API_KEY
const baseURL = `https://www.thecocktaildb.com/api/json/v2/${apiKey}`

export const getDrinks = async (searchParm) => {
  const response = await fetch(`${baseURL}${searchParm}`)
  const data = await response.json()
  return data
}

export const getIndividualDrinkDetails = async (id) => {
  const response = await fetch(`${baseURL}/lookup.php?i=${id}`)
  const data = await response.json()
  return data
}
