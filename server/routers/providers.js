const router = require('express').Router()
const Provider = require('../models/providers')
const Offer = require("../models/calendarOffer");
const Recipient = require("../models/recipients");
//const User = require('../models/users')

router.get('/', async(req, res) => {
    const providers = await Provider.find({}).populate('user');
    res.send(providers)
})

router.get('/:id', async (req, res) => {
    const provider = await Provider.findOne({user: req.params.id})
        .populate('timeoffer')
        .populate('user')
        .populate({path: 'booking', populate: {path: 'user'}})
        .populate({path: 'booking', populate: {path: 'image'}}).exec()

    //const provider = await Provider.findById(req.params.id)
    res.send(provider);
})

router.get('/:id/by-provider-id', async (req, res) => {
    const provider = await Provider.findOne({_id: req.params.id})
        .populate('timeoffer')
        .populate('user')
        .populate({path: 'booking', populate: {path: 'user'}})
        .populate({path: 'booking', populate: {path: 'image'}}).exec()

    //const provider = await Provider.findById(req.params.id)
    res.send(provider);
})
// Get providers matching by client decired profession
router.post('/profession',async (req, res) => {
    //const result = req.params.profession;
    try {
        console.log("In req.body " + req.body.result )

        const providers = await Provider.find({profession:{$in: req.body.result}})
            .populate('timeoffer').populate('user');

        res.send(providers)
    } catch (err) {
        res.send("Error!!!")
    }

})

router.post('/:id', async(req, res) =>{
    try {
        const body = req.body;
        //const user = await User.findById(req.params.id)
        const provider = new Provider({
            yritys: body.yritys,
            ytunnus: body.ytunnus,
            address: body.address,
            latitude: body.latitude,
            longitude: body.longitude,
            profession: body.profession,
            priceByHour: body.priceByHour,
            isAvailable24_7: body.isAvailable24_7,
            timeoffer: body.timeId,
            credit: 30,
            rating: {
                positive: 0,
                negative: 0
            },

            room: body.room,
            user: req.params.id
        })
        const savedProvider = await provider.save()
        res.json(savedProvider)
    } catch (exception) {
        console.log("Error in providers post: " + exception)
    }
})

router.post('/:id/booking', async(req, res) =>{
    try {
        const body = req.body;
        //const user = await User.findById(req.params.id)
        //const provider =
        const provider = new Provider({
            yritys: body.yritys,
            ytunnus: body.ytunnus,
            address: body.address,
            latitude: body.latitude,
            longitude: body.longitude,
            profession: body.profession,
            priceByHour: body.priceByHour,
            isAvailable24_7: body.isAvailable24_7,
            timeoffer: body.timeId,
            room: body.room,
            user: req.params.id
        })
        const savedProvider = await provider.save()
        res.json(savedProvider)
    } catch (exception) {
        console.log("Error in providers post: " + exception)
    }
})

// Adding recipient to providers booking array
router.post('/:providerId/addRecipient/:id', async (req, res) => {
    try {
        const provider = await Provider.findById(req.params.providerId);
        if (!provider.booking.includes(req.params.id)) {
            provider.booking = provider.booking.concat(req.params.id);
            provider.save();
            res.send("Recipient is added!")
        } else {
            res.send("Recipient not added!")
        }


    } catch (err) {
        console.log("Error: " + err.message)
    }
})

router.put('/:id', async (req, res) => {
    const body = req.body
    const params = req.params;

    try {
        const updated = await Provider.findByIdAndUpdate(
            params.id, body, { new: true }
        )

        res.status(200).json(updated.toJSON())
    } catch (err) {
        console.log('Error: ', err)
    }
})
// Set positive rating number for provider
router.put('/:id/rating-plus', async (req, res) => {
    const body = req.body;
    const params = req.params;
    try {
        const provider = await Provider.findById(params.id)
        //const rating = provider[0].rating
        //const positive = rating.positive + 1
        console.log("Positive.. " + provider.rating.positive)
        const update = {
            rating: {
                positive: provider.rating.positive + 1,
                negative: provider.rating.negative
            }
        }
        /*const update = {
            rating: {
                positive: 9
            }
        }*/
        const ratingPlus = await Provider.findByIdAndUpdate(
            params.id, update, {new: true}
            /*/!*{id: "64590fa4a3710f5d6488561f", "ratin*!/g.positive": 2},
            {$set: {"rating.$.positive": 6}},*/
            /*{id: params.id},
            {
                /!*$set: {

                    "rating.$.positive": 6
                }*!/
               /!* $push: {
                    "rating": {
                        "positive": 45
                    }
                }*!/
            }*/




        )
        // "rating.positive": 5
        res.status(200).json(ratingPlus)
    } catch (err) {
        res.send("Rating positive error!")
    }
})
// Set negative rating number for provider
router.put('/:id/rating-minus', async (req, res) => {
    const body = req.body;
    const params = req.params;
    try {
        const provider = await Provider.findById(params.id)
        //const rating = provider[0].rating
        //const positive = rating.positive + 1
        console.log("Negative.. " + provider.rating.negative)
        const update = {
            rating: {
                positive: provider.rating.positive,
                negative: provider.rating.negative + 1
            }
        }
        /*const update = {
            rating: {
                positive: 9
            }
        }*/
        const ratingPlus = await Provider.findByIdAndUpdate(
            params.id, update, {new: true}
            /*/!*{id: "64590fa4a3710f5d6488561f", "ratin*!/g.positive": 2},
            {$set: {"rating.$.positive": 6}},*/
            /*{id: params.id},
            {
                /!*$set: {

                    "rating.$.positive": 6
                }*!/
               /!* $push: {
                    "rating": {
                        "positive": 45
                    }
                }*!/
            }*/




        )
        // "rating.positive": 5
        res.status(200).json(ratingPlus)
    } catch (err) {
        res.send("Rating positive error!")
    }
})


// Add positive rating text to provider
router.put('/:id/rating-pos', async (req, res) => {
    const body = req.body;
    const params =req.params;

    try {
        const ratingUpdated = await Provider.findByIdAndUpdate(
            params.id,
            {
                $push: {
                    feedback: {

                        pos: body.pos


                    }
                }
            },
            { new: true }
        )

        res.status(200).json(ratingUpdated)      //.json(ratingUpdated)
    }catch (err) {
        console.log(err.message)
        res.send("Some error happened to make rating")
    }
})
router.put('/:id/rating-neg', async (req, res) => {
    const body = req.body;
    const params = req.params;

    try {
        const ratingUpdated = await Provider.findByIdAndUpdate(
            params.id,
            {
                $push: {
                    feedback: {

                        neg: body.neg


                    }
                }
            },
            { new: true }
        )

        res.status(200).json(ratingUpdated)      //.json(ratingUpdated)
    }catch (err) {
        console.log(err.message)
        res.send("Some error happened to make rating")
    }
})
// Profession
// Add profession to providers array
router.post('/:id/addProfession', async (req, res) => {
    const params = req.params;
    const body = req.body;
    try {
        const provider = await Provider.findById(params.id)
        if (!provider.profession.includes(body.profession)) {
            provider.profession = provider.profession.concat(body.profession);
            provider.save();
            res.send("Profession is added successfully!")
        } else {
            res.send("Profession already existing!")
        }
    } catch (err) {
        console.log("Error " + err.message)
        res.send("There is error to add profession!")
    }
})
// Edit profession in providers array
router.put('/:id/editProfession', async (req, res) => {
    const body = req.body;
    try {
        console.log("Index " + body.index)
        const { index } = req.body;
        const { pro } = req.body;

        const { id } = req.params;
        const data = await Provider.updateOne({ _id:id },
        {  $set: {[`profession.${index}`]: pro}});
        res.send(data);
    } catch (error) {
        res.send({error: error})
    }
})
// Edit address
router.put('/:id/editAddress', async (req, res) => {
    const body = req.body
    const params = req.params;

    try {
        const updated = await Provider.findByIdAndUpdate(
            params.id, body, { new: true }
        )

        res.status(200).json(updated.toJSON())
    } catch (err) {
        console.log('Error: ', err)
        res.status({error: err})
    }
})
// Delete profession in providers's array
router.put('/:id/removeProfession', async (req, res) => {
    try {
        await Provider.findByIdAndUpdate(
            { _id:req.params.id },
            { $pull: {profession: req.body.profession }}
        )
        res.send("Profession is removed!")
    } catch (err) {
        res.send("No profession is deleted!").end()
    }
})

// Add a dialog room to provider room array
router.post('/:id/addRoom', async (req, res) => {
    const params = req.params;
    const body = req.body;
    try {
        const provider = await Provider.findById(params.id)
        if (!provider.room.includes(body.room)) {
            provider.room = provider.room.concat(body.room);
            provider.save();
            res.send("Room is added successfully!")
        } else {
            res.send("Room already existing!")
        }
    } catch (err) {
        console.log("Error " + err.message)
        res.send("There is error to add room!")
    }
})
// Remove room from provider
router.delete('/:id/removeRoom', async (req,res) => {
    try {
        await Provider.findByIdAndUpdate(
            { _id:req.params.id },
            { $pull: {room: req.body.room }}
        )
        res.send("The room " + req.body.room + " is removed")
    } catch (error) {
        res.send("There is error to remove room!")
    }
})
// Removes booking object id from array
router.delete('/:id/recipient/:recipientId', async (req, res) => {
    try {
        await Provider.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: {booking: req.params.recipientId}}
        )
        res.send("Booking is removed!")
    } catch (err) {
        res.send("No booking is deleted!").end()
    }
})



module.exports = router