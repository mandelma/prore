const router = require('express').Router();

const Recipient = require('../models/recipients');

router.get('/', async (req, res) => {
    try {
        const recipients = await Recipient.find({});
        res.send(recipients);
    } catch (err) {
        console.log("Error: " + err.message);
    }
})

router.post('/:id', async (req, res) => {
    try {
        const body = req.body;
        const recipient = new Recipient({
            address: body.address,
            latitude: body.latitude,
            longitude: body.longitude,
            professional: body.professional,
            onTime: {
                month: body.month,
                day: body.day,
                hours: body.hours,
                minutes: body.minutes
            },
            bookings: body.booking,
            user: req.params.id
        })

        const savedRecipient = await recipient.save()
        res.json(savedRecipient)
    } catch (err) {
        console.log("Error: " + err.message);
    }
})

module.exports = router;