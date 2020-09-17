export const getAllRecipes = async () => {
  const response = await fetch('https://www.thecocktaildb.com/')
  const data = await response.json()
  return data
}

export const getIndividualDrinkDetails = async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/)
  const data = await response.json()
  return data
}