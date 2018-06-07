const mongoose = require('mongoose')
const Location = require('../models/location')
const Pictures = require('../models/pictures')
const User    = require('../models/users')

// Connect to Database
mongoose.connect('mongodb://localhost/Picture-Perfect')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

  //create new user
const user1 = new User({
   firstName: 'Jane',
   lastName: 'Appleseed',
   userName: 'japple',
   company: 'Jane Appleseed Photos',
   profilePicture: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-0.3.5&s=6b8b8f1e0baa1d6660285c85155917e2&auto=format&fit=crop&w=581&q=80'
})

const location = new location({
    city: 'Montgomery',
    state: 'Alabama',
    pictures: 'https://images.unsplash.com/photo-1497398276231-94ff5dc90217?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0ce3550fc40a23bb71bda77cd496273&auto=format&fit=crop&w=1950&q=80'

})