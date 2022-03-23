import axios from "axios";

//APP_ID
const APP_ID = "f3c4d543";

//apikey
const APP_Key = "1ad54cafe3269cea23810273038d8111";

//BASE_URL_popular
const BASE_URL_P = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_Key}`;

//BASE_URL_veggie
const BASE_URL_V = `https://api.edamam.com/api/recipes/v2?type=public&q=vegetables&app_id=${APP_ID}&app_key=${APP_Key}`



const getPopular = async () => {
  const api = await axios.get(BASE_URL_P);
  localStorage.setItem("popular", JSON.stringify(api.data.hits))
  return api.data.hits;
};

const getVeggie =async () => {
  const api = await axios.get(BASE_URL_V)
  localStorage.setItem("veggie", JSON.stringify(api.data.hits))
  return api.data.hits
}

const getCuisine = async (name) => {
  const api = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=cuisine%20${name}&app_id=${APP_ID}&app_key=${APP_Key}`)
  return api.data.hits
}

export { getPopular, getVeggie, getCuisine };
