const router = require('express').Router()
const Provider = require('../models/providers')
//const User = require('../models/users')

router.get('/', async(req, res) => {
    const providers = await Provider.find({}).populate('user')
    res.send(providers)
})

router.post('/:id', async(req, res) =>{
    try {
        const body = req.body;
        //const user = await User.findById(req.params.id)
        const provider = new Provider({
            address: body.address,
            latitude: body.latitude,
            longitude: body.longitude,
            profession: body.profession,
            priceByHour: body.priceByHour,
            isAvailable24_7: body.isAvailable24_7,
            available: {
                dayFrom: body.dayFrom,
                hoursFrom: body.hoursFrom,
                minutesFrom: body.minutesFrom,
                dayTo: body.dayTo,
                hoursTo: body.hoursTo,
                minutesTo: body.minutesTo
            },
            user: req.params.id
        })
        const savedProvider = await provider.save()
        res.json(savedProvider)
    } catch (exception) {
        console.log("Error in providers post: " + exception)
    }
})

module.exports = router