const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', (req, res, next) => {

    // Find all Users
   User
      .find()
      .then((groupOfUsers) => {
  
        // Once you have all user, then render out index page users is all
        // pieces of data that match the User Model
        res.render('user/index', { groupOfUsers: groupOfUsers })
      })
      .catch((err) => res.send(err))
  
  })

  module.exports = router