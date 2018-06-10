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

//NEW Route
router.get('/new', (req, res) => {
  res.render('user/new')
  console.log ("new is working")
})

//CREATE Route
router.post('/', (req, res) => {
  const newUser = req.body
  User
    .create(newUser)
    .then(() => {
      console.log ("create is working")
      res.redirect('/user')
      console.log ("create is working")
    })
    
})


//SHOW ROUTE
router.get('/:id', (req, res) => {

  User
      .findById(req.params.id)
      .then((individualUser) => {
        console.log ("show is working")
          res.render('user/show', { individualUser })
     
        })

})



//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
  User
      .findById(req.params.id)
      .then((users) => {
        console.log ("edit is working")
          res.render('user/edit', { individualUser: users })
          
        })
      
})


// UPDATE Route
router.put('/:id', (req, res) => {
 User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/user/${req.params.id}`)

  })
})

//DELETE Route
router.delete('/:id', (req, res)=> {
  User.findByIdAndRemove(req.params.id)
  .then(()=>{
    console.log('Delete is working')
    res.redirect('/user')
  })
})



module.exports = router