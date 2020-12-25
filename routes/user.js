// this to hundle login - singup - logout
const express = require('express'); 
const router = express.Router();
const bcrypt = require('bcrypt'); // encrypt nad compare passsword
const Users = require('../models/users'); // DB model
const passport = require('passport'); // for user auth


// login auth
router.post('/', 
    passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true
    })
);

// regsiter post request -- create and save new user in DB with hashed password
router.post('/register', (req, res)=>{
    Users.exists({email: req.body.email}, function(err, data){
    if (data == true) {
        req.flash('error', 'Email already exists')
        res.redirect('/register');
    } else {
        bcrypt.hash(req.body.password, 5).then(function(hash){
            const user = new Users();
            user.email = req.body.email;
            user.password = hash;
            user.firstName = req.body.fname;
            user.lastName = req.body.lname;
            user.save(function(err){
                if (err){
                    console.log(`Error Saving to DB: ${err}`);
                    req.flash('error', `${err}`);
                    res.redirect('/register');
                } else {
                    req.flash('success', 'New user created in db, please sign in');
                    res.redirect('/');
                }})
    })}})})



module.exports = router;