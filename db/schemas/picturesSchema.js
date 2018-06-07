const Schema = require('mongoose').Schema
//need to embed
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
