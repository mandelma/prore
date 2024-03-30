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

const removeRoom = async (id, userID)  => {
    const removedRoom = await axios.delete(`${baseUrl}/${id}/remove-room`, userID);
    return removedRoom.data;
}

const editAddress = async (id, address) => {
    const newAddress = await axios.put(`${baseUrl}/${id}/editAddress`, address);
    return newAddress.data;
}

const editProfession = async (id, professionData) => {
    const newProfession = await axios.put(`${baseUrl}/${id}/editProfession`, professionData);
    return newProfession.data;
}
const additionalProfession = async (id, profession) => {
    const addProfession = await axios.post(`${baseUrl}/${id}/addProfession`, profession);
    return addProfession.data;
}
const removeProfession = async (id, professionToRemove) => {
    const removed = await axios.put(`${baseUrl}/${id}/removeProfession`, professionToRemove);
    return removed.data;
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

const addProSlide = async (id, slide) => {
    const addedSlide = await axios.post(`${baseUrl}/${id}/addSlide`, slide);
    return addedSlide.data;
}

export default {
    getProviders,
    getProvider,
    getProvByProvId,
    getProvidersMatchingByProfession,
    addProvider,
    updateProvider,
    addRoom,
    removeRoom,
    editAddress,
    editProfession,
    additionalProfession,
    removeProfession,
    addProviderBooking,
    removeProviderBooking,
    setPositiveRating,
    setNegativeRating,
    addPositiveFeedback,
    addNegativeFeedback,
    addProSlide
}