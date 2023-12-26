const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatUserSchema = new Schema({
    userID: {
        type: String
    },
    username: {
        type: String
    },
    room: {
        type: String
    }

})

chatUserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const ChatUser = mongoose.model('chatUser', chatUserSchema)
module.exports = ChatUser