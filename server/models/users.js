const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    yritys: {
        type: String
    },
    ytunnus: {
        type: String
    },
    username: {
        type: String,
        unique: true,
        minlength: 3,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    passwordHash: {
        type: String
    },
    // provider: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'provider'
    // },
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('user', userSchema)
module.exports = User