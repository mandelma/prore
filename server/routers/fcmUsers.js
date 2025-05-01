const fcmRouter = require('express').Router();
const User = require('../models/fcmUsers');

fcmRouter.get('/:userID',  async (req, res) => {
    const selectedUser = await User.findOne({userId: req.params.userID});
    res.send(selectedUser)
})

fcmRouter.post('/register-token', async (req, res) => {
    const { userId, token } = req.body;
    if (!userId || !token) return res.status(400).json({ message: 'Missing userId or token' });

    console.log("-- User id is: " + userId);
    console.log("-- FCM token is: " + token);
    let fcm_user = await User.findOne({ userId });

    if (!fcm_user) {
        fcm_user = new User({ userId, fcmTokens: [token] });
    } else if (!fcm_user.fcmTokens.includes(token)) {
        fcm_user.fcmTokens.push(token);
    }

    await fcm_user.save();

    res.json({ message: 'Token registered successfully' });
})

module.exports = fcmRouter;