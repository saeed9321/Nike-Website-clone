// hndle get reqeuests only
const express = require('express'); 
const router = express.Router();


// index page get request
router.get('/', (req, res)=> {
    res.render('index', {title: "Homepage", user: req.user, isLoggedIn: req.isAuthenticated()});
}) 

// registeration page
router.get('/register', (req, res)=>{
    if(req.isAuthenticated()){ // if user already logged in redirect to homepage
        res.redirect('/');
    }
    res.render('register', {title: "Registeration", user: req.user, isLoggedIn: req.isAuthenticated()})
})

// logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})
module.exports = router;