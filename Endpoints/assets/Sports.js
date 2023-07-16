const axios = require("axios");

async function getSports() {

    try {
        const response = await axios.get('http://api.citybik.es/v2/networks/velib');
        return response.data;
    }
    catch(error) { 
        return error;
    }

}
module.exports = {getSports}
