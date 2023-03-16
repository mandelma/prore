const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipientSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number
    },
    professional: [
        {
            type: String,
            required:true
        }
    ],
    onTime: [
        {
            month: {
                type: Number
            },
            day: {
                type: Number
            },
            hours: {
                type: Number
            },
            minutes: {
                type: Number
            },
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
})

recipientSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})


const Recipient = mongoose.model('Recipient', recipientSchema)
module.exports = Recipient