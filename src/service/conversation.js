const axios = require('axios');
const baseUrl = "/api/chatmessages";

const getMessages = () => {
    const messages = axios.get(baseUrl);
    return messages.data;
}

const editStatus = async (id, status) => {
    const res = await axios.put(`${baseUrl}/${id}`, status);
    return res.data;
}

const deleteRoomMessages = async (room) => {
    await axios.delete(`${baseUrl}/${room}`);
}


export default { getMessages, editStatus, deleteRoomMessages }