const router = require('express').Router()
const Provider = require('../models/providers')
const Offer = require("../models/calendarOffer");
//const User = require('../models/users')

router.get('/', async(req, res) => {
    const providers = await Provider.find({}).populate('user');
    res.send(providers)
})

router.get('/:id', async (req, res) => {
    const provider = await Provider.findOne({user: req.params.id}).populate('timeoffer').populate('user')
    //const provider = await Provider.findById(req.params.id)
    res.send(provider)
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
            user: req.params.id
        })
        const savedProvider = await provider.save()
        res.json(savedProvider)
    } catch (exception) {
        console.log("Error in providers post: " + exception)
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

module.exports = router