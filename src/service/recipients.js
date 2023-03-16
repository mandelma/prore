const axios = require('axios');

const baseUrl = '/api/recipients';

const getRecipients = async () => {
    const results = await axios.get(baseUrl);
    return results.data;
}

const addRecipient = async (id, newRecipient) => {
    const recipient = await axios.post(`${baseUrl}/${id}`, newRecipient);
    return recipient.data;
}

export default { getRecipients, addRecipient }