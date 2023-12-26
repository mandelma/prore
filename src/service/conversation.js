const axios = require('axios');
const baseURL = "/api/chatmessages";

const getMessages = () => {
    const messages = axios.get(baseURL);
    return messages.data;
}

const editStatus = (id, status) => {
    const res = axios.put(`${baseURL}/${id}`, status);
    return res.data;
}


export default { getMessages, editStatus }