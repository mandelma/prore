const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatUserSchema = new Schema({
    room: {type: String},
    proID: {type: String},
    pro: {type: String},
    member: [
        {
            userID: {type: String},
            username: {type: String},
            isOnline: {type: Boolean}
        }
    ]


    // userID: {
    //     type: String
    // },
    // username: {
    //     type: String
    // },
    // room: {
    //     type: String
    // },
    // avatar: {
    //     type: String
    // },
    // connected: {
    //     type: Boolean
    // }
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