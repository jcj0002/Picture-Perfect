const Schema = require('mongoose').Schema
const pictures = require('./picturesSchema')
const locationSchema = new Schema({
  city: String,
  state: String,
  pictures: [locationSchema]
})

module.exports = locationSchema
