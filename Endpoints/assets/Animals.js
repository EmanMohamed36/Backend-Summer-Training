const axios = require("axios");

async function getAnimals() {

    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        return response.data;
    }
    catch(error) { 
        return error;
    }

}
module.exports = {getAnimals}
