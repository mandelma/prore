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
            name: body.name,
            distance: body.distance,
            duration: body.duration,
            price: body.price,
            description: body.description,
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

module.exports = router;