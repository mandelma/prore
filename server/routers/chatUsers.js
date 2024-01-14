const Router = require('express').Router();

const ChatUsers = require('../models/chatUsers')


Router.get('/:id', async (req, res) => {
    try {
        const chatUsers = await ChatUsers.find({userID: req.params.id})
        res.send(chatUsers);
    } catch (err) {
        console.log("Error: " + err.message);
    }
})

module.exports = Router;