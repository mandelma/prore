const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatMessageSchema = new Schema({
    room: String,
    content: String,
    username: String,
    date: String,
    userID: String,
})

chatMessageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const convercation = mongoose.model('convercation', chatMessageSchema)
module.exports = convercation