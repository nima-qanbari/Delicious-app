import axios from "axios";

//APP_ID
const APP_ID = "f3c4d543";

//apikey
const APP_Key = "1ad54cafe3269cea23810273038d8111";

//BASE_URL
const BASE_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_Key}`;

const getPopular = async () => {
  const api = await axios.get(BASE_URL);
  localStorage.setItem("popular", JSON.stringify(api.data.hits))
  return api.data.hits;
};

export { getPopular };
