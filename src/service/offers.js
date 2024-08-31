const axios = require('axios');

const baseUrl = "/api/offer";

const addOffer = async (offer) => {
    const new_offer = await axios.post(baseUrl, offer);
    return new_offer.data;
}

export default {
    addOffer
}