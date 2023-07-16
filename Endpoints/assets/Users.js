const axios = require("axios");

async function getUsers() {

    try {
        const response = await axios.get('https://random-data-api.com/api/users/random_user');
        return response.data;
    }
    catch(error) { 
        return error;
    }

}
module.exports = {getUsers}
