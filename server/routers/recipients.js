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
    const recipients = await Recipient.find({user: req.params.id})
        .populate('user')
        .populate({path: 'ordered', populate: {path: 'user'}} )
        .populate('image').exec();

    //const provider = await Provider.findById(req.params.id)
    res.send(recipients)
})

router.get('/booking/:id', async (req, res) => {
    const booking = await Recipient.findOne({_id: req.params.id}).populate('image').populate('user').populate('ordered')
        .populate({path: 'ordered', populate: {path: 'user'}}).exec();
    res.send(booking);
})



router.post('/:id', async (req, res) => {
    try {
        const body = req.body;
        const recipient = new Recipient({
            created: body.created,
            created_ms: body.created_ms,
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
            date: (body.month + 1) + "/" + body.day + "/" + body.year,
            //bookings: body.booking,
            description: body.description,
            status: body.status,
            image: body.imageId,
            user: req.params.id
        })

        const savedRecipient = await recipient.save()
        res.json(savedRecipient)
    } catch (err) {
        console.log("Error: " + err.message);
    }
})
// Update date and time
router.put('/:id/updateDate', async (req, res) => {
    //const dateID = req.params.dateId;
    try {
        const dateUpdate = {
            year: req.body.year,
            month: req.body.month,
            day: req.body.day,
            hours: req.body.hours,
            minutes: req.body.minutes
        }
        // supposed that in date array is only one object
        const data = await Recipient.updateOne({ _id: req.params.id },
            {  $set: {[`onTime.${0}`]: dateUpdate}});

        await Recipient.findByIdAndUpdate(
            req.params.id,
            {date: (req.body.month + 1) + "/" + req.body.day + "/" + req.body.year},
            { new: true}
        )

        res.status(200).json(data)
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
            await recipient.save();
            res.send("Order is added!")
        } else {
            res.send("Order is already added!")
        }


    } catch (err) {
        console.log("Error: " + err.message)
        res.send("Error to add order!")
    }
})

// Remove ordered provider id from ordered array
router.put('/:id/pro/:proID', async (req, res) => {
    try {
        await Recipient.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: {ordered: req.params.proID}}
        )
        res.send("Pro is removed!")
    } catch (err) {
        res.send("No pro is removed!").end()
    }
})
// Add provider id to recipient
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
// Add images id to array
router.post('/:recipientId/addImage/:id', async (req, res) => {
    try {
        const recipient = await Recipient.findById(req.params.recipientId);
        if (recipient.image !== null) {
            if (!recipient.image.includes(req.params.id)) {
                recipient.image = recipient.image.concat(req.params.id);
                await recipient.save();
                res.send("Image is added!")
            } else {
                res.send("Image not added!")
            }
        } else {
            recipient.image = req.params.id;
            await recipient.save();
            res.send("Image is added!")
        }



    } catch (err) {
        console.log("Error: " + err.message)
    }
})
// Add provider name
// router.put('/:id', async (req, res) => {
//     try {
//         const
//     }
// })

// Add feedBack given
router.put('/client/:id', async (req, res) => {
    try {
        const client = await Recipient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        )
        res.status(200).json(client);
    } catch (err) {
        res.send({error: err});
    }
})

// Edit description
router.put('/:id/description', async (req, res) => {
    try {
        const body = req.body;
        const updatedDescription = await Recipient.findByIdAndUpdate(
            req.params.id, body, { new: true }
        )

        res.status(200).json(updatedDescription.toJSON())
    } catch (err) {
        res.send({error: err})
    }
})

// Remove image id from array after image is deleted
// Removes booking object id from array
router.delete('/:id/image/:imageId', async (req, res) => {
    try {
        await Recipient.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: {image: req.params.imageId}}
        )
        res.send("Image is removed!")
    } catch (err) {
        res.send("No image is removed!").end()
    }
})
// Edit booking address
router.put('/:id/editBookingAddress', async (req, res) => {
    const body = req.body
    const params = req.params;

    try {
        const updated = await Recipient.findByIdAndUpdate(
            params.id, body, { new: true }
        )

        res.status(200).json(updated.toJSON())
    } catch (err) {
        console.log('Error: ', err)
        res.status({error: err})
    }
})
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

// Delete booking
router.delete('/:id', async (req, res) => {
    try {
        await Recipient.findByIdAndDelete(req.params.id);
        res.send("Booking deleted!")
    } catch (err) {
        res.send({error: err.message})
    }
})

module.exports = router;