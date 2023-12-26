const axios = require('axios')

const baseUrl = '/api/map'

const getLocation = async () => {
    const location = await axios.get(baseUrl)
    return location.data
}

export default {
    getLocation
}