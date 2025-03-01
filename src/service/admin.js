const axios = require('axios');
const baseUrl = '/api/admin';

const getCompleted = async () => {
    const completed = await axios.get(baseUrl);
    return completed.data;
}

export default { getCompleted };