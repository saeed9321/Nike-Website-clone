const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/users');

module.exports = function(passport){
    passport.use(
        new localStrategy({ usernameField: 'email'}, (email, password, done) => {
            // see if user in DB
            User.findOne({ email: email })
            .then(user => {
                if (!user){
                    return done(null, false, { message: "Email is not registered"})
                }
                // matching password with hash
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch){
                        return done(null, user, { message: "Logged in successfully" })
                    } else {
                        return done(null, false, { message: "Wrong password" })
                    }
                })
            })
            .catch  (err => console.log(err));
        })
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
    passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
        });
    });
}
