const router = require('express').Router();
const Offer = require('../models/offers');
const Recipient = require('../models/recipients');


router.get('/:id', async(req, res) => {
    const offers = await Offer.find({});
    res.send(offers);
})

router.post('/', async(req, res) => {
    const body = req.body;
    try {
        const newOffer = new Offer({
            bookingID: body.bookingID,
            room: body.room,
            isNewOffer: true,
            name: body.name,
            distance: body.distance,
            duration: body.duration,
            price: body.price,
            description: body.description,
            place: body.place,
            provider: body.provider
        });
        // const booking = await Recipient.findById(body.bookingID);
        // booking.offers = booking.offers.concat(body.offerID);
        const offer = await newOffer.save();
        //await booking.save();

        res.json(offer);
    } catch (error) {
        res.status(500).send({error: "ERROR HERE!"})
    }

})

router.put('/:id', async (req, res) => {
    try {
        console.log("body in offers: " + req.body)
        const offerToUpdateStatus = await Offer.findByIdAndUpdate(
            req.params.id, req.body, {new: true}
        );
        res.status(200).send(offerToUpdateStatus);
    } catch (error) {
        console.log("Error: " + error.message);
    }
})

router.delete('/:booking_id', async (req, res) => {
    try {
        console.log("params for delete offer " + req.params.booking_id);

        await Offer.deleteMany({bookingID: req.params.booking_id});
        res.status(204).end()
    } catch (error) {
        console.log("Error: " + error.message);
        res.send("Error to delete offer!")
    }
})

module.exports = router;