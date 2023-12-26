const router = require('express').Router();

const Message = require('../models/ChatMessages')
//const Provider = require("../models/providers");

router.get('/', async (req, res) => {
    const messages = await Message.find({});
    res.send(messages)
})

router.put('/:id', async (req, res) => {
    const body = req.body
    const params = req.params;

    try {
        const updated = await Message.findByIdAndUpdate(
            params.id, body, { new: true }
        )

        res.status(200).json(updated.toJSON())
    } catch (err) {
        console.log('Error: ', err)
    }
})
router.delete('/', async (req, res) => {
    try {
        await Message.deleteMany({})

        res.status(204).end()
    } catch (err) {
        console.log('Error:', err)
    }
})

module.exports = router;