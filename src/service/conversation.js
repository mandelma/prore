const axios = require('axios');
const baseUrl = "/api/chatmessages";

const getMessages = () => {
    const messages = axios.get(baseUrl);
    return messages.data;
}

// const editStatus = (id, status) => {
//     const res = axios.put(`${baseURL}/${id}`, status);
//     return res.data;
// }

const deleteRoomMessages = async (room) => {
    await axios.delete(`${baseUrl}/${room}`);
}


export default { getMessages, deleteRoomMessages }