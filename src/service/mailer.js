const axios = require('axios');
const baseUrl = '/api/new_message';

const notice = async (content) => {
    const newNotice = await axios.post(`${baseUrl}/mail`, content);
    return newNotice.data;
}

export default { notice };