const express = require('express')
const router = express.Router({mergeParams: true})
const Pictures = require('../models/pictures')
const Location = require('../models/location')

router.get('/', (req, res, next) => {

    //Find all Pictures
    Pictures

        .find()
        .then((groupOfPictures) => {
            // Once you have all pictures, then render out index page 
            res.render('pictures/index', { groupOfPictures: groupOfPictures })
        })
        .catch((err) => res.send(err))

}) 




module.exports = router