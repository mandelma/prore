const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    isNewMsg: {
      type: Boolean
    },
    content: {
        type: String
    },
    reason: {
        String
    },
    sender: {
        type: String
    },
    time: {
        type: Date
    }
})

messageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Message = mongoose.model('msg', messageSchema)
module.exports = Message