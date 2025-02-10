const axios = require('axios')
//import axios from 'axios'

const baseURL = "https://prokeikkatori-f43699030e18.herokuapp.com/api/login"
// http://localhost:3001

const login = async loginData => {
    const response = await axios.post(baseURL, loginData)
    return response.data
}

const verifyToken = async (token) => {
    const decodedToken = await axios.post(`${baseURL}/${token}`);
    return decodedToken.data;
}

export default { login, verifyToken }