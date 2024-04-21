const Router = require('express').Router();

const ChatUsers = require('../models/chatUsers')


Router.get('/:id', async (req, res) => {
    try {
        const chatUsers = await ChatUsers.find({member: {$elemMatch: {userID: req.params.id}}})
        res.send(chatUsers);
    } catch (err) {
        console.log("Error: " + err.message);
    }
})

Router.get('/:room/room-users', async (req, res) => {
    try {
        const roomUsers = await ChatUsers.find({room: req.params.room})
        res.send(roomUsers);
    } catch (err) {
        res.send({Error: "No users found!"})
    }
})
// Delete both one room users and room
Router.delete('/:room', async (req, res) => {
    try {
        console.log("Room id chatusers " + req.params.room);
        await ChatUsers.findOneAndDelete(req.params.room);
        res.status(204).end();
    } catch (err) {
        res.send("There was an error to delete chat room users!")
    }
})

module.exports = Router;