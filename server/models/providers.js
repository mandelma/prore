const mongoose = require('mongoose')

const Schema = mongoose.Schema

const providerSchema = new Schema({
    address: {
        type: String,
        unique: true,
        minlength: 3,
        required: true
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    profession: [
        {
            type: String
        }
    ]

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