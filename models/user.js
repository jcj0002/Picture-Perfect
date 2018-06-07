//requirements: require mongoose
const mongoose = require('mongoose')

//create your user schema:
const userSchema = require('../db/schemas/userSchema')

const user = mongoose.model('user', userSchema)

//export your user with module.exports()
module.exports = user
