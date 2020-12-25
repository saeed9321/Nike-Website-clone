const mongoose = require('mongoose');

// users schema
const usersSchecma = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const users = module.exports = mongoose.model('users', usersSchecma);