const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipientSchema = new Schema({
    header: {
        type: String,
        required: true
    },
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
            year: {
                type: Number,
                required: true
            },
            month: {
                type: Number,
                required: true
            },
            day: {
                type: Number,
                required: true
            },
            hours: {
                type: Number,
                required: true
            },
            minutes: {
                type: Number,
                required: true
            },
        }
    ],
    date: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    image: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'image'
        }
    ],
    // booking: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'booking'
    //     }
    // ],
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