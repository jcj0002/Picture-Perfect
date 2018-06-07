const mongoose = require('mongoose')
const Location = require('../models/location')
const Pictures = require('../models/pictures')
const Users    = require('../models/users')

// Connect to Database
mongoose.connect('mongodb://localhost/Picture-Perfect')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

  //create new user
const 