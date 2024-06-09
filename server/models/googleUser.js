const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const googleSchema = new Schema({
    googleID: {type: String},
    email: {
        type: String,
        lowercase: true,
        trim: true,
    },
        // accountId: {
        //     type: String,
        // },
        // name: {
        //     type: String,
        //     trim: true,
        // },
        // provider: {
        //     type: String,
        // },
    },
    {
        timestamps: true,

    })

googleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

const GoogleModel = mongoose.model("googleUser", googleSchema);
module.exports = GoogleModel;