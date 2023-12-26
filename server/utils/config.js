require('dotenv').config()

const PORT = process.env.PORT || 3001
const SECRET = process.env.SECRET
const MONGODB_URL_PUBLIC = process.env.MONGODB_URL_PUBLIC
const MONGODB_URL_LOCAL = process.env.MONGODB_URL_LOCAL
const GOOGLE_MAP = process.env.GOOGLE_MAP

module.exports = {
    MONGODB_URL_PUBLIC,
    MONGODB_URL_LOCAL,
    SECRET,
    PORT,
    GOOGLE_MAP
}