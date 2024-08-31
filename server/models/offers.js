const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offerSchema = new Schema({
    name: {type: String},
    distance: {type: Number},
    duration: {type: Number},
    // latitude: {type: Number},
    // longitude: {type: Number},
    // rating: {type: Object},
    // feedback: {type: Array},
    // profession: {type: Array},
    // homepage: {type: String},
    price: {type: Number},
    description: {type: String},

    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'provider'
    }


})

offerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Offer = mongoose.model('offer', offerSchema);
module.exports = Offer;