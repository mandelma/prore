const axios = require('axios')

const geocode = () => {
    const response = axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=01620+Raikukuja,+Vantaa&key=AIzaSyBDA2EBoGezJx51wQtxoW3Ecq5Ql8CCAiE')
    return response.data
}

export default { geocode }