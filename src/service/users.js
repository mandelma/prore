const axios = require('axios')
//import axios from 'axios'
const baseUrl = "/api/users"
// http://localhost:3001s

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addUser = async newUser => {
    const response = await axios.post(`${baseUrl}`, newUser)
    return response.data
}
// Remove user avatar and name form server in assets
const removeAvatar = async (id) => {
    const av = await axios.put(`${baseUrl}/${id}/removeAvatar`, {avatar: {}});
    return av.data;
}

export default { getAll, addUser, removeAvatar }