const Schema = require('mongoose').Schema
//need to embed
const locationSchema = new Schema({
  city: String,
  state: String,
})

module.exports = locationSchema
