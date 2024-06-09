//const FBUser = require("./models/User.model");
const express = require("express");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require('passport-google-oauth20')
const passport = require("passport");
const facebookRouter = express.Router();

require("dotenv").config();

passport.use(
    new GoogleStrategy(
        {
            //clientID: '827712847390-c7nv2lhgcpspj2pmk75o67sb4ef21lt9.apps.googleusercontent.com',
            //clientSecret: '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',
            //callbackUrl: 'auth/google/callback'
        },
        accessToken => {
            console.log(accessToken)
        }
    )
)



facebookRouter.get('/auth/google', passport.authenticate('google', {
    scope:['profile', 'email']
}))

facebookRouter.get('/auth/google/callback', passport.authenticate('google'));

// facebookRouter.get('/', async (req, res) => {
//     res.send("Hei")
// } )

// passport.use(new FacebookStrategy({
//         clientID: process.env.FACEBOOK_CLIENT_ID,
//         clientSecret: process.env.FACEBOOK_SECRET_KEY,
//         callbackURL: "http://localhost:3003/auth/facebook/pkt"
//     },
//     function(accessToken, refreshToken, profile, cb) {
//         FBUser.findOrCreate({ facebookId: profile.id }, function (err, user) {
//             return cb(err, user);
//         });
//     }
// ));
//
// facebookRouter.get('/auth/facebook',
//     passport.authenticate('facebook'));
//
// facebookRouter.get('/auth/facebook/pkt',
//     passport.authenticate('facebook', { failureRedirect: '/login' }),
//     function(req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('/pkt');
//     });

module.exports = facebookRouter;