const axios = require('axios')
//import axios from 'axios'
const baseUrl = "/api/chatusers"
// http://localhost:3001s

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getChatUser = async (id) => {
    const chatuser = await axios.get(`${baseUrl}/${id}`);
    return chatuser.data;
}

const removeChatMembersRoom = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
}

// const addUser = async newUser => {
//     const response = await axios.post(`${baseUrl}`, newUser)
//     return response.data
// }
// Remove user avatar and name form server in assets


export default { getAll, getChatUser, removeChatMembersRoom }