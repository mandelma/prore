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

export default { getRecipients, getOwnBookings, getBookingById, addRecipient, updateRecipient }