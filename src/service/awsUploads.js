const axios = require('axios');
const baseUrl = '/api/aws_upload';

const uploadClientImage = async (newImageData) => {
    const result = await axios.post(`${baseUrl}/upload-client`, newImageData)
    return result.data
}

const editClientImage = async (id, key, newImage) => {
    const updated = await axios.put(`${baseUrl}/update_client/${id}/${key}`, newImage);
    return updated.data;
}

const uploadProImage = async (proImage) => {
    const proImg = await axios.post(`${baseUrl}/upload-pro`, proImage);
    return proImg.data;
}

const deleteImage = async (id, key) => {
    await axios.delete(`${baseUrl}/delete-image/${id}/${key}`);
}

export default { uploadClientImage, editClientImage, uploadProImage, deleteImage };