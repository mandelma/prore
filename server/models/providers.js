const mongoose = require('mongoose')

const Schema = mongoose.Schema

const providerSchema = new Schema({
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
    profession: [
        {
            type: String,
            required:true
        }
    ],
    priceByHour: {
        type: Number
    },
    isAvailable24_7: {
        type: Boolean
    },
    available: [
        {
            monthFrom:{
                type: Number,
            },
            dayFrom: {
                type: Number,
            },
            hoursFrom: {
                type: Number,
            },
            minutesFrom: {
                type: Number,
            },
            monthTo: {
                type: Number
            },
            dayTo: {
                type: Number,
            },
            hoursTo: {
                type: Number,
            },
            minutesTo: {
                type: Number,
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
})

providerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Provider = mongoose.model('provider', providerSchema)
module.exports = Provider