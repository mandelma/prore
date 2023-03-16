const axios = require('axios');

const baseUrl = "/api/providers";

const getProviders = async () => {
    const result = await axios.get(baseUrl);
    return result.data;
}

const addProvider = async (id, newProvider) => {
    const provider = await axios.post(`${baseUrl}/${id}`, newProvider);
    return provider.data;
}

export default { getProviders, addProvider }