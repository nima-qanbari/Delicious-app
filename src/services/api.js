import axios from "axios";

//apikey
const apiKey = "d3b2ee8d212e4269b095f8b32ae3be3d"

const getPopular = async () => {
    const api = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
    )
    return api.data
  };

  export {getPopular}