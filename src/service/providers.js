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

const getProvByProvId = async (id) => {
    const prov = await axios.get(`${baseUrl}/${id}/by-provider-id`);
    return prov.data;
}

/*const getProvidersMatchingByProfession = async (pro) => {
    const result = await axios.get(`${baseUrl}/profession/${pro}`);
    console.log("opjpojfäpw " + pro.result)
    return result.data;
}*/

const getProvidersMatchingByProfession = async (profession) => {
    const result = await axios.post(`${baseUrl}/profession`, profession);
    return result.data;
}

const addProvider = async (id, newProvider) => {
    const provider = await axios.post(`${baseUrl}/${id}`, newProvider);
    return provider.data;
}

const addRoom = async (id, room) => {
    const providerRoom = await axios.post(`${baseUrl}/${id}/addRoom`, room);
    return providerRoom.data;
}

const editAddress = async (id, address) => {
    const newAddress = await axios.put(`${baseUrl}/${id}/editAddress`, address);
    return newAddress.data;
}

const addProviderBooking = async (id, recipientId) => {
    const addedBooking = await axios.post(`${baseUrl}/${id}/addRecipient/${recipientId}`);
    return addedBooking.data;
}

const updateProvider = async (id, providerData) => {
    const updated = await axios.put(`${baseUrl}/${id}`, providerData)
    return updated.data;
}

const removeProviderBooking = async (id, recipientId) => {
    const bookingResult = await axios.delete(`${baseUrl}/${id}/recipient/${recipientId}`);
    return bookingResult.data;
}

const setPositiveRating = async (id) => {
    const ratingPos = await axios.put(`${baseUrl}/${id}/rating-plus`);
    return ratingPos.data;
}
const setNegativeRating = async (id) => {
    const ratingNeg = await axios.put(`${baseUrl}/${id}/rating-minus`);
    return ratingNeg.data;
}
const addPositiveFeedback = async (id, feedbackPos) => {
    const res = await axios.put(`${baseUrl}/${id}/rating-pos`, feedbackPos);
    return res.data;
}
const addNegativeFeedback = async (id, feedbackNeg) => {
    const neg = await axios.put(`${baseUrl}/${id}/rating-neg`, feedbackNeg);
    return neg.data;
}

export default {
    getProviders,
    getProvider,
    getProvByProvId,
    getProvidersMatchingByProfession,
    addProvider,
    updateProvider,
    addRoom,
    editAddress,
    addProviderBooking,
    removeProviderBooking,
    setPositiveRating,
    setNegativeRating,
    addPositiveFeedback,
    addNegativeFeedback
}