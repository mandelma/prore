const axios = require('axios');

const baseUrl = '/api/recipients';

const getRecipients = async () => {
    const results = await axios.get(baseUrl);
    return results.data;
}

const getOwnBookings = async (id) => {
    const ownResults = await axios.get(`${baseUrl}/user/${id}`);
    return ownResults.data;
}

const getBookingById = async (id) => {
    const booking = await axios.get(`${baseUrl}/booking/${id}`);
    return booking.data;
}

const addRecipient = async (id, newRecipient) => {
    const recipient = await axios.post(`${baseUrl}/${id}`, newRecipient);
    return recipient.data;
}

const updateRecipient = async (id, update) => {
    const updated = await axios.put(`${baseUrl}/${id}`, update);
    return updated.data;
}
// edit booking address
const editBookingAddress = async (id, address) => {
    const newAddress = await axios.put(`${baseUrl}/${id}/editBookingAddress`, address);
    return newAddress.data;
}

// Edit description
const editDescription = async (id, description) => {
    const edited = await axios.put(`${baseUrl}/${id}/description`, description);
    return edited.data;
}

// Add provider you confirmed
const addProviderData = async (id, proID) => {
    const result = await axios.post(`${baseUrl}/${id}/addOrdered/${proID}`);
    return result.data;
}
const addProviderID = async (id, provID) => {
    const added = await axios.put(`${baseUrl}/${id}`, provID);
    return added.data;
}

const addImage = async (recipientID, imageID) => {
    const imageAdded = await axios.post(`${baseUrl}/${recipientID}/addImage/${imageID}`);
    return imageAdded.data;
}

const removeImage = async (recipientID, imageID) => {
    const imageRemoved = await axios.delete(`${baseUrl}/${recipientID}/image/${imageID}`);
    return imageRemoved.data;
}

const feedbackClient = async (id, isClient) => {
    const client = await axios.put(`${baseUrl}/client/${id}`, isClient);
    return client.data;
}

export default {
    getRecipients,
    getOwnBookings,
    getBookingById,
    addRecipient,
    updateRecipient,
    editBookingAddress,
    editDescription,
    addProviderData,
    addProviderID,
    addImage,
    removeImage,
    feedbackClient
}