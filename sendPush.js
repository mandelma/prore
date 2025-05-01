const { google } = require('googleapis');
const axios = require('axios');
const fs = require('fs');

// 1. Load your Firebase service account key
const keyFilePath = './firebase-key.json'; // adjust if needed
const deviceToken = 'fIVMMU92Qy6J0sKSyhyvS3:APA91bF32vL9BWisJfHe_oOaiXfsjXjfpTXycCsgnY2FdlKaA1NRpmSsRvfyrGKbOJSc4h54hBL2nr-AVmjjoneI9A7ZtFKTsWaAwRTIHNj1w4N4SLajznc'; // replace this with your device token
const projectId = 'prokeikkatori-9e9c7'; // from firebase console

async function getAccessToken() {
    const auth = new google.auth.GoogleAuth({
        keyFile: keyFilePath,
        scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
    });

    const client = await auth.getClient();
    const token = await client.getAccessToken();
    return token.token;
}

async function sendPushNotification() {
    const accessToken = await getAccessToken();

    const message = {
        message: {
            token: deviceToken,
            notification: {
                title: 'Hello from Node.js 🎉',
                body: 'This push came via script!',
            },
            android: {
                notification: {
                    channel_id: 'default_channel_id', // must match your Android setup
                },
            },
        },
    };

    try {
        const response = await axios.post(
            `https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`,
            message,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('✅ Push sent successfully:', response.data);
    } catch (error) {
        console.error('❌ Error sending push:', error.response?.data || error.message);
    }
}

sendPushNotification();