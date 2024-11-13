// const Pusher = require("pusher");
// const router = require('express').Router();
//
// const pusher = new Pusher({
//     appId: "1602094",
//     key: "f4971ff2b19d74acbb57",
//     secret: "eac62dbf694d95195ab8",
//     cluster: "eu",
//     useTLS: true
// });
//
// router.post('/api/join-chat', (req, res) => {
//
//     req.session.username = req.body.username;
//     res.json('Joined');
// });
//
// router.post('/api/pusher/auth', async (req, res) => {
//     const socketId = req.body.socket_id;
//     const channel = req.body.channel_name;
//     const presenceData = {
//         user_id: req.session.username
//     };
//     console.log("Test: " + socketId)
//     const auth = pusher.authenticate(socketId, channel, presenceData);
//     res.send(auth);
// });
//
// router.post('/api/send-message', (req, res) => {
//     pusher.trigger('presence-test', 'message', {
//         username: req.body.username,
//         message:  req.body.message
//     });
//     res.send('Message sent');
// });
//
//
// module.exports = router;

const messageRouter = require('express').Router();
const Messages = require('../models/messages');
const User = require('../models/users');

messageRouter.get('/', async (req, res) => {
    const messages = await Messages.find();
    res.send(messages);
})

messageRouter.post('/:id/message', async (req, res) => {
    const body = req.body;
    try {
        const user = await User.findById(req.params.id);
        const newMessage = new Messages({
            isNewMsg: body.isNewMsg,
            content: body.content,
            reason: body.reason,
            sender: body.sender,
            time: body.time
        })

        const createdNewMessage = await newMessage.save();
        user.messages = user.messages.concat(newMessage._id);
        await user.save();
        res.send(createdNewMessage);
    } catch (err) {
        console.log("Error: " + err.message);
        res.send({error: err.message});
    }
})

messageRouter.put('/:id/edit_message_status', async (req, res) => {
    try {
        console.log("TEst " + req.body)
        const onEdit = await Messages.findByIdAndUpdate(
            req.params.id, req.body, {new: true}
        );
        res.send(onEdit);
    } catch (err) {
        console.log("Error: " + err.message);
        res.send({Error: "There was error to edit message status!"})
    }
})
// Remove message
messageRouter.delete('/:userID/remove_message/:messageID', async (req, res) => {
    try {
        await User.findOneAndUpdate(
            {_id: req.params.userID},
            {$pull: {messages: req.params.messageID}}
        );
        await Messages.findByIdAndDelete(req.params.messageID);
        res.status(204).end();
    } catch (err) {
        console.log("Error: " + err.message);
        res.send({Error: "No message was deleted!"})
    }
})

module.exports = messageRouter;