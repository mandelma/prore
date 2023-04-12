const router = require('express').Router();
const BookingTime = require('../models/calendarBooking')

router.get('/', async (req, res) => {
    const bookings = await BookingTime.find({});

    res.send(bookings);
})

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const bookingTime = new BookingTime({
            booking: {
                month: body.month,
                day: body.day,
                hours: body.hours,
                minutes: body.minutes
            }
        })


        const booked = await bookingTime.save()
        res.json(booked)
    } catch (err) {
        console.log("Error: " + err.message);
    }
})

module.exports = router;