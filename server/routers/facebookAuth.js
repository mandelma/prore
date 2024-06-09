//const FBUser = require("./models/User.model");
const express = require("express");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require('passport-google-oauth20')
const passport = require("passport");
const facebookRouter = express.Router();

require("dotenv").config();

// passport.use(
//     new GoogleStrategy(
//         {
//
//         },
//         accessToken => {
//             console.log(accessToken)
//         }
//     )
// )



// facebookRouter.get('/auth/google', passport.authenticate('google', {
//     scope:['profile', 'email']
// }))
//
// facebookRouter.get('/auth/google/callback', passport.authenticate('google'));

// facebookRouter.get('/', async (req, res) => {
//     res.send("Hei")
// } )

// passport.use(new FacebookStrategy({

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