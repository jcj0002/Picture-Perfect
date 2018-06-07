//requirements: require mongoose
const mongoose = require('mongoose')

//create your picture schema:
const picturesSchema = require('../db/schemas/picturesSchema')

const pictures = mongoose.model('pictures', picturesSchema)

//export your user with module.exports()
module.exports = pictures
