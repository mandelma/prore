const axios = require('axios');

const baseUrl = "/api/providers";

const getProviders = async () => {
    const result = await axios.get(baseUrl);
    return result.data;
}

const getProvider = async (id) => {
    const provider = await axios.get(`${baseUrl}/${id}`);
    return provider.data;
}

const addProvider = async (id, newProvider) => {
    const provider = await axios.post(`${baseUrl}/${id}`, newProvider);
    return provider.data;
}

const updateProvider = async (id, providerData) => {
    const updated = await axios.put(`${baseUrl}/${id}`, providerData)
    return updated.data
}

export default { getProviders, getProvider, addProvider, updateProvider }