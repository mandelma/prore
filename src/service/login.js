const axios = require('axios')
//import axios from 'axios'

const baseURL = "http://localhost:3001/api/login"

const login = async loginData => {
    const response = await axios.post(baseURL, loginData)
    return response.data
}

export default { login }