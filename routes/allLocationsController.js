const express = require('express')
const router = express.Router({ mergeParams: true })
const Location = require('../models/location')


router.get('/', (req, res, next) => {

    // Find all Users
    Location
        .find()
        .then((groupOfLocations) => {
            console.log(groupOfLocations)
            // Once you have all user, then render out index page users is all
            // pieces of data that match the Location Model
            res.render('location/index', { groupOfLocations: groupOfLocations })
        })
        .catch((err) => res.send(err))

})
//SHOW ROUTE
router.get('/:id', (req, res) => {

    Location
        .findById(req.params.id)
        .then((individualLocations) => {
            console.log(individualLocations)
            console.log("show is working")
            res.render('location/show', { individualLocations })

        })

})



module.exports = router