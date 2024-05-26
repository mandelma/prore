const axios = require('axios');
const baseUrl = '/api/pro_history'

const getProHistory = async () => {
    const history = await axios.get(baseUrl);
    return history.data;
}

const updateProHistory = async (history) => {
    const added = await axios.post(`${baseUrl}`, history);
    return added.data;
}

export default { getProHistory, updateProHistory };