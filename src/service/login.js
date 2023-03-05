const axios = require('axios')
//import axios from 'axios'

const baseURL = "/api/login"
// http://localhost:3001

const login = async loginData => {
    const response = await axios.post(baseURL, loginData)
    return response.data
}

export default { login }