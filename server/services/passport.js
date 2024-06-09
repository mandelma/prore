const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('googleUser')
//const User = require('../models/googleUser')
const keys = require('../utils/config');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            new User({googleID: profile.id, email: profile.emails[0].value}).save();

            console.log('access token', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile', profile);
        }
    )
);
