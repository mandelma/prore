const router = require('express').Router();

const Recipient = require('../models/recipients');
//const Provider = require("../models/providers");

router.get('/', async (req, res) => {
    try {
        const recipients = await Recipient.find({})
        res.send(recipients);
    } catch (err) {
        console.log("Error: " + err.message);
    }
})

router.get('/user/:id', async (req, res) => {
    const recipients = await Recipient.find({user: req.params.id}).populate('user')
    //const provider = await Provider.findById(req.params.id)
    res.send(recipients)
})

router.get('/booking/:id', async (req, res) => {
    const booking = await Recipient.find({_id: req.params.id}).populate('image').populate('user');
    res.send(booking);
})



router.post('/:id', async (req, res) => {
    try {
        const body = req.body;
        const recipient = new Recipient({
            header: body.header,
            address: body.address,
            latitude: body.latitude,
            longitude: body.longitude,
            professional: body.professional,
            onTime: {
                year: body.year,
                month: body.month,
                day: body.day,
                hours: body.hours,
                minutes: body.minutes
            },
            date: body.month + "/" + body.day + "/" + body.year,
            //bookings: body.booking,
            description: body.description,
            image: body.imageId,
            user: req.params.id
        })

        const savedRecipient = await recipient.save()
        res.json(savedRecipient)
    } catch (err) {
        console.log("Error: " + err.message);
    }
})

module.exports = router;