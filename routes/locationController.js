const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../models/user')
const Location = require('../models/location')

// Get Listing
router.get('/', (req, res, next) => {

  // Find user by userId
  User.findById(req.params.userId)
    .then((user) => {
      const listOfLocations = user.location
      console.log(listOfLocations)
      // once you have user, do the same render
      // listOfLocations will be equal to user.locations
      res.render('location/index', {
        listOfLocations

      })
    })
})


module.exports = router