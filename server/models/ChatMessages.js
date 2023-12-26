const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatMessageSchema = new Schema({
    room: String,
    content: String,
    username: String,
    date: String,
    userID: String,
    receiverID: String,
    status: String
})

chatMessageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const conversation = mongoose.model('conversation', chatMessageSchema)
module.exports = conversation