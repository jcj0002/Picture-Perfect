const Schema = require('mongoose').Schema
const pictures = require('./picturesSchema')

const locationSchema = new Schema({
  state: String,
  pictures: [pictures]
})

module.exports = locationSchema
