const router = require('express').Router();

const Recipient = require('../models/recipients');
const Provider = require("../models/providers");
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
    const recipients = await Recipient.find({user: req.params.id}).populate('user').populate('image').exec();
    //const provider = await Provider.findById(req.params.id)
    res.send(recipients)
})

router.get('/booking/:id', async (req, res) => {
    const booking = await Recipient.find({_id: req.params.id}).populate('image').populate('user').exec();
    res.send(booking);
})



router.post('/:id', async (req, res) => {
    try {
        const body = req.body;
        const recipient = new Recipient({
            created: body.created,
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
            status: "waiting",
            image: body.imageId,
            user: req.params.id
        })

        const savedRecipient = await recipient.save()
        res.json(savedRecipient)
    } catch (err) {
        console.log("Error: " + err.message);
    }
})
// Add ordered provider id to ordered array
router.post('/:recipientId/addOrdered/:id', async (req, res) => {
    try {
        const recipient = await Recipient.findById(req.params.recipientId);
        if (!recipient.ordered.includes(req.params.id)) {
            recipient.ordered = recipient.ordered.concat(req.params.id);
            recipient.save();
            res.send("Order is added!")
        } else {
            res.send("Order is already added!")
        }


    } catch (err) {
        console.log("Error: " + err.message)
        res.send("Error to add order!")
    }
})
// Add provider name to recipient for room name
router.put('/:id', async (req, res) => {
    try {
        const provider = await Recipient.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        res.status(200).json(provider)
    } catch (error) {
        res.send("Error to add provider!")
    }
})
// Add provider name
// router.put('/:id', async (req, res) => {
//     try {
//         const
//     }
// })

// Edit booking status
router.put('/:id', async (req, res) => {
    const body = req.body
    const params = req.params;

    try {
        const updated = await Recipient.findByIdAndUpdate(
            params.id, body, { new: true }
        )

        res.status(200).json(updated.toJSON())
    } catch (err) {
        console.log('Error: ', err)
    }
})

module.exports = router;