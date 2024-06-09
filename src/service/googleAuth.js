const axios = require('axios')
//import axios from 'axios'
const baseUrl = "/auth/google"
// http://localhost:3001s

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}



export default { getAll }