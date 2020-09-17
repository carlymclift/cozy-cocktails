export const getAllRecipes = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
  const data = await response.json()
  return data
}

export const getIndividualDrinkDetails = async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  const data = await response.json()
  return data
}