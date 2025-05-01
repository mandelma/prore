const axios = require('axios');
//const baseUrl = "/api/fcm";

import backendUrl from '@/url_config';
const baseUrl = `${backendUrl}/fcm`;

const handleFcmToken = async(userID, token) => {
    const register = await axios.post(`${baseUrl}/register-token`, userID, token);
    return register.data;
}

export default { handleFcmToken };