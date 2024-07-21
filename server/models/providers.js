const mongoose = require('mongoose')

const Schema = mongoose.Schema

const providerSchema = new Schema({
    yritys: {
        type: String
    },
    ytunnus: {
        type: String
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
    profession: [
        {
            type: String,
            required:true
        }
    ],
    priceByHour: {
        type: Number
    },
    range: {
        type: Number
    },
    isAvailable24_7: {
        type: Boolean
    },
    pro_link: {
        type: String
    },
    timeoffer: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'timeoffer'
        }
    ],
    booking: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recipient'
        }
    ],
    room: [
        {
            type: Object
        }
    ],
    // rating: [
    //     {
    //         positive: {
    //             type: Number
    //         },
    //         negative: {
    //             type: Number
    //         },
    //         text: {
    //             type: String
    //         }
    //     }
    // ],
    proTime: {
        type: Number
    },
    credit: {
        type: Number
    },
    rating: {
        positive: {
            type: Number
        },
        negative: {
            type: Number
        },
        /*text: [
            {
                pos: {
                    type: String
                },
                neg: {
                    type: String
                }
            }
        ]*/
    },

    feedback: [
        {
            pos: {
                type: String
            },
            neg: {
                type: String
            }
        }
    ],

    /*rating: {
        positive: {
            type: Number
        },
        negative: {
            type: Number
        }
    },*/

    reference: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'image'
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