const axios = require('axios')
const baseUrl = '/api/upload'

const getAll = async () => {
    const result = await axios.get(baseUrl)
    return result.data
}

const create = async (newImageData) => {
    const result = await axios.post(baseUrl, newImageData, {})
    return result.data
}

const update = async (id, newImageData) => {
    const result = await axios.put(`${baseUrl}/${id}`, newImageData)
    return result.data
}

const remove = async (id, recipientId) => {
    await axios.delete(`${baseUrl}/${id}/${recipientId}`)
}

export default { getAll, create, update, remove }