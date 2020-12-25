const express = require('express');
//const router = require('./links.js');
const app = express();
const parser = require('body-parser'); // for parsing post requestes from gtml template
const mongoose = require('mongoose'); // DB CRUD op
const session = require('express-session'); // for using flashes
const flash = require("express-flash"); // flashing
const passport = require('passport'); // for user auth
const PORT = process.env.PORT || 5000;


// set template engine
app.set('view engine', 'ejs');


// use static folder
app.use(express.static(__dirname));


// Create a session
app.use(session({
    secret: "anything",
    resave: true,
    saveUninitialized: true,
}));


// Create flash object
app.use(flash());


require('./config/passport')(passport);
// passport config
app.use(passport.initialize());
app.use(passport.session());


// User parser as middleware
app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());


// configure db and connect
const db = mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
}).then(console.log('Connected to MongoDB'));


// import routes
app.use(require('./routes/index.js'));
app.use(require('./routes/user.js'));


// run server
app.listen(PORT, ()=>{ console.log(`Server running on port: ${PORT}`); })