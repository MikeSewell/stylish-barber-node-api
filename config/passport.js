// const passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//         done(err, user);
//     });
// });

// passport.use("google", new GoogleStrategy({
//     clientID: "321881043246-3f3t4t4rjle9eo1ti1kra46rb31h8stv.apps.googleusercontent.com",
//     clientSecret: "uBmNy1se2YHsQYpmzd8zWcBp",
//     callbackURL: "http://localhost:3000/user/google/return",
// },
//     function (token, refreshToken, profile, done) {
//         console.log(profile);

//         process.nextTick(function () {
//             const tst = User.findOne({googleId: profile.id})
//             if(tst){
//                 return done(null,tst)
//             }

//         });
//     }));