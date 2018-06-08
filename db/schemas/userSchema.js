const Schema = require('mongoose').Schema
const locationSchema = require('./locationSchema')

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String,
    company: String,
    profilePicture: String,
    location: [locationSchema]
})

module.exports = userSchema