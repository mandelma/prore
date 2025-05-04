// getAccessToken.js
const { google } = require('googleapis');
const path = require('path');

async function getAccessToken() {
    const keyPath = path.join(__dirname, 'firebase-key.json'); // Update path if needed

    const auth = new google.auth.GoogleAuth({
        keyFile: keyPath,
        scopes: ['https://www.googleapis.com/auth/firebase.messaging']
    });

    const accessToken = await auth.getAccessToken();
    console.log('Access Token:', accessToken);
    this.accessToken = accessToken;
}

getAccessToken();
