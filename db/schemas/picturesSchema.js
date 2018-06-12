const Schema = require('mongoose').Schema

const picturesSchema = new Schema({
  userName: String,
  description: String,
  info: String,
  pictureItself: String,
  date:{
    type: Date,
    default: new Date()
  }
})

module.exports = picturesSchema
