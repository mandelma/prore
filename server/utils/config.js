require('dotenv').config()

const PORT = process.env.PORT || 3001
const SECRET = process.env.SECRET
const MONGODB_URL = process.env.MONGODB_URL
const GOOGLE_MAP = process.env.GOOGLE_MAP

module.exports = {
    MONGODB_URL,
    SECRET,
    PORT,
    GOOGLE_MAP
}