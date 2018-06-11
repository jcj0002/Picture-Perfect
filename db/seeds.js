require('dotenv').config()
const mongoose = require('mongoose')
const Location = require('../models/location')
const Picture = require('../models/pictures')
const User    = require('../models/user')

// Connect to Database
mongoose.connect('mongodb://localhost/Picture-Perfect')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })
  User.remove()
  .then(()=>{
    const pictures1 = new Picture({
        userName:'japple',
        description:'picture of flower',
        information: 'taken with canon 5D',
        pictureItself: 'https://images.unsplash.com/photo-1497398276231-94ff5dc90217?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0ce3550fc40a23bb71bda77cd496273&auto=format&fit=crop&w=1950&q=80',
        date: new Date(2008,1,10)
    
    })
      const location1 = new Location({
        state: 'Alabama',
        pictures:[pictures1]
        
    })
    
    
      //create new user
    const user1 = new User({
       firstName: 'Jane',
       lastName: 'Appleseed',
       userName: 'japple',
       company: 'Jane Appleseed Photos',
       profilePicture: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-0.3.5&s=6b8b8f1e0baa1d6660285c85155917e2&auto=format&fit=crop&w=581&q=80',
       location: [location1]
    })
    const user2 = new User({
      firstName: 'Billy',
      lastName: 'Appleseed',
      userName: 'rapple',
      company: 'Jane Appleseed Photos',
      profilePicture: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-0.3.5&s=6b8b8f1e0baa1d6660285c85155917e2&auto=format&fit=crop&w=581&q=80',
      location: [location1]
   })
   const user3 = new User({
    firstName: 'Dave',
    lastName: 'Appleseed',
    userName: 'snapple',
    company: 'Jane Appleseed Photos',
    profilePicture: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-0.3.5&s=6b8b8f1e0baa1d6660285c85155917e2&auto=format&fit=crop&w=581&q=80',
    location: [location1]
 })
 const user4 = new User({
  firstName: 'Sally',
  lastName: 'Appleseed',
  userName: 'tapple',
  company: 'Jane Appleseed Photos',
  profilePicture: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-0.3.5&s=6b8b8f1e0baa1d6660285c85155917e2&auto=format&fit=crop&w=581&q=80',
  location: [location1]
})
const user5 = new User({
  firstName: 'Julie',
  lastName: 'Appleseed',
  userName: 'happle',
  company: 'Jane Appleseed Photos',
  profilePicture: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-0.3.5&s=6b8b8f1e0baa1d6660285c85155917e2&auto=format&fit=crop&w=581&q=80',
  location: [location1]
})
    
    
    
    const users = [user1, user2, user3, user4, user5 ]
    const locations = [location1]

    // save test data
     return User.insertMany(users)
    
  })
  

   

  .then(() => {

    // close the database
    mongoose.connection.close()
  })
