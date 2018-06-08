const express = require('express')
const router = express.Router()
const Pictures = require('../models/pictures')

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




//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    Pictures
        .findById(req.params.id)
        .then((onepicture) => {
            res.render('pictures/edit', { indvidualPicture: onePicture })
        })
})

//UPDATE Route
router.put('/:id', (req, res) => {
    Pictures.findByIdAndUpdate(req.params.id, req.body, { new: ture }).then(() => {
        res.redirect(`/Pictures/${req.params.id}`)
    })
})

//DELETE Route
router.delete('/:id', (req, res) => {
    Pictures.findByIdAndRemove(req.params.id)
        .then(() => {
            console.log('Successfully Delete')
            res.redirect('/pictures')

        })
})

module.exports = router