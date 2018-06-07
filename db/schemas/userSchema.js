const Schema = require('mongoose').Schema
// const locationSchema = require('./locationSchema')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: String,
    company: String,
    profilePicture: String,
})

module.exports = userSchema