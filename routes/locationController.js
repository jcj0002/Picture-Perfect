const express = require('express')
const router = express.Router()
// const User = require('../models/user')
const Location = require('../models/location')

// Get Listing
router.get('/', (req, res, next) => {

  Location

    .find()
    .then((listOfLocations) => {

      
      res.render('location/index', { listOfLocations: listOfLocations })
    })
    .catch((err) => res.send(err))

})




// router.get('/', (req, res, next) => {

    
//     User.findById(req.params.userId)
//       .then((user) => {
//         const location = user.locations
//         res.render('user/index', {
//           user
//         })
//       })

//   })
module.exports= router;