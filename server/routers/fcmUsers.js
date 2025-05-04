const fcmRouter = require('express').Router();
const UserToken = require('../models/fcmUsers');
const path = require("path");
const sendPush = require('../services/sendPush')

const {google} = require("googleapis");

fcmRouter.get('/:userID',  async (req, res) => {
    const selectedUser = await User.findOne({userId: req.params.userID});
    res.send(selectedUser)
})

fcmRouter.post('/register-token', async (req, res) => {
    const { userId, token } = req.body;
    if (!userId || !token) return res.status(400).json({ message: 'Missing userId or token' });

    console.log("-- User id is: " + userId);
    console.log("-- FCM token is: " + token);
    let fcm_user = await UserToken.findOne({ userId });

    if (!fcm_user) {
        fcm_user = new UserToken({ userId, fcmTokens: [token] });
    } else if (!fcm_user.fcmTokens.includes(token)) {
        fcm_user.fcmTokens.push(token);
    }

    await fcm_user.save();

    res.json({ message: 'Token registered successfully' });
})

fcmRouter.post('/push-to-user', async (req, res) => {
    const { userId, title, message } = req.body;

    /*const keyPath = './firebase-key.json'; // Update path if needed
    const user = User.findOne({ userId })
    if (!user || user.fcmTokens.length === 0) return;
    const auth = new google.auth.GoogleAuth({
        keyFile: keyPath,
        scopes: ['https://www.googleapis.com/auth/firebase.messaging']
    });

    const accessToken = await auth.getAccessToken();*/
    // console.log('Access Token:', accessToken);
    // res.send(accessToken);

    console.log("userId " + userId + " title - " + title);


    const user = await UserToken.findOne({ userId: userId });



    if (!user) return res.status(404).json({ error: 'User not found' });

    const tokens = user.fcmTokens;
    console.log("User tokens: " + tokens)
    const result = await sendPush(user.fcmTokens, title, message);
    console.log("Result - " + result.length);
    res.json(result);

})

module.exports = fcmRouter;