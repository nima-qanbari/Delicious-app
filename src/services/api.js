import axios from "axios";

//API_KEY
const API_KEY = "bf4054f952324632ac4c2a2c4f482d14"

const getPopular = async () => {
  const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`);
  localStorage.setItem("popular", JSON.stringify(api.data.recipes))
  return api.data.recipes
};

const getVeggie =async () => {
  const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=vegetarian`)
  localStorage.setItem("veggie", JSON.stringify(api.data.recipes))
  return api.data.recipes
}

const getCuisine = async (name) => {
  const api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`)
  return api.data.results
}

const getSearched = async (name) => {
  const api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`)
  return api.data.results
}

export { getPopular, getVeggie, getCuisine, getSearched };
