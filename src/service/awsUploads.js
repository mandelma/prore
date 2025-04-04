const axios = require('axios');
const baseUrl = '/api/aws_upload';

const uploadImage = async (newImageData) => {
    const result = await axios.post(`${baseUrl}/upload`, newImageData)
    return result.data
}

export default { uploadImage };