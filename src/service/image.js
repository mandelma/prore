const axios = require('axios')
const baseUrl = '/api/upload'

const getAll = async () => {
    const result = await axios.get(baseUrl)
    return result.data
}

const createProRefImg = async (proID, imageData) => {
    const proRef = await axios.post(`${baseUrl}/${proID}/pro-ref-img`, imageData);
    return proRef.data;
}

const removeProRefImage = async (id, proId) => {
    await axios.delete(`${baseUrl}/${id}/${proId}`)
}

const create = async (newImageData) => {
    const result = await axios.post(baseUrl, newImageData, {})
    return result.data
}

// Create image for avatar
const createProfileImage =  async (id, imageData) => {
    const image = await axios.post(`${baseUrl}/${id}/avatar`, imageData);
    return image.data;
}

// Update user avatar
const newAvatar = async (id, avatar) => {
    const avt = await axios.post(`${baseUrl}/${id}/update_avatar`, avatar);
    return avt.data;
}

const updateImage = async (id, newImageData) => {
    const result = await axios.put(`${baseUrl}/${id}`, newImageData)
    return result.data
}

const remove = async (id, recipientId) => {
    await axios.delete(`${baseUrl}/${id}/delClientImg/${recipientId}`)
}

export default { getAll, createProRefImg, removeProRefImage, create, createProfileImage, newAvatar, updateImage, remove }