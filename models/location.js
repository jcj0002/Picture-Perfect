//requirements: require mongoose
const mongoose = require('mongoose')

//create your location schema:
const locationSchema = require('../db/schemas/locationSchema')

const location = mongoose.model('location', locationSchema)

//export your location with module.exports()
module.exports = location
