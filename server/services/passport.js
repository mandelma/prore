const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('googleUser')
//const User = require('../models/googleUser')
//const keys = require('../config/keys');

// passport.use(
//     new GoogleStrategy(
//         {
//             //clientID: '359901037732-2jilg1shqd0md47hjrilsb7p84k46h9u.apps.googleusercontent.com',
//             //clientSecret: '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',
//             //callbackURL: '/auth/google/callback'
//         },
//         (accessToken, refreshToken, profile, done) => {
//             new User({googleID: profile.id, email: profile.emails[0].value}).save();
//
//             console.log('access token', accessToken);
//             console.log('refresh token', refreshToken);
//             console.log('profile', profile);
//         }
//     )
// );
