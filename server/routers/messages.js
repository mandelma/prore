const Pusher = require("pusher");
const router = require('express').Router();

const pusher = new Pusher({
    appId: "1602094",
    key: "f4971ff2b19d74acbb57",
    secret: "eac62dbf694d95195ab8",
    cluster: "eu",
    useTLS: true
});

// router.get('/', (req, res) => {
//     res.sendFile('index.html');
// });

router.post('/api/join-chat', (req, res) => {
    // store username in session
    req.session.username = req.body.username;
    res.json('Joined');
});

router.post('/api/pusher/auth', async (req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    // Retrieve username from session and use as presence channel user_id
    const presenceData = {
        user_id: req.session.username
    };
    console.log("Test: " + socketId)
    const auth = pusher.authenticate(socketId, channel, presenceData);
    //const auth = pusher.authorizeChannel(socketId, channel, presenceData);
    res.send(auth);
    //res.send("kkkkk");
});

router.post('/api/send-message', (req, res) => {
    pusher.trigger('presence-test', 'message', {
        username: req.body.username,
        message:  req.body.message
    });
    res.send('Message sent');
});


// router.get('/', async (req, res) => {
//     res.send("Hello vue!!!")
// })
//
// router.post('/pusher/user-auth', async (req, res) => {
//     const socketId = req.body.socket_id;
//     const userData = {
//         id: req.session.username,
//         fullname: req.session.fullname,
//     };
//     const authUser = pusher.authenticateUser(socketId, userData);
//     res.send(authUser);
//
// })
//
// router.post('/', async (req, res) => {
//
//     console.log("Message " + req.body.message)
//     //if (req.body.userId === '640d9ec449f4c03dc724b428') {
//         pusher.trigger("chat", "message", {
//             message: req.body.message,
//             userId: req.body.userId
//
//
//
//         });
//
//     //}
//
//
//
//     res.send("Posting" + req.body.username);
// })

module.exports = router;