require('dotenv').config()
const mongoose = require('mongoose')
const Location = require('../models/location')
const Picture = require('../models/pictures')
const User = require('../models/user')

// Connect to Database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

const pictures1 = new Picture({
  userName: 'japple',
  description: 'picture of flower',
  information: 'taken with canon 5D',
  pictureItself: 'https://images.unsplash.com/photo-1497398276231-94ff5dc90217?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0ce3550fc40a23bb71bda77cd496273&auto=format&fit=crop&w=1950&q=80',
  date: new Date(2008, 1, 10)

})
const location1 = new Location({
  state: 'Alabama',
  pictures: [pictures1]

})
const location2 = new Location({
  state: 'Georgia',
  pictures: [pictures1]

})
const location3 = new Location({
  state: 'Florida',
  pictures: [pictures1]

})
const location4 = new Location({
  state: 'Tennessee',
  pictures: [pictures1]

})

const location5 = new Location({
  state: 'Missippi',
  pictures: [pictures1]

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
  location: [location2]
})
const user3 = new User({
  firstName: 'Dave',
  lastName: 'Appleseed',
  userName: 'snapple',
  company: 'Jane Appleseed Photos',
  profilePicture: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-0.3.5&s=6b8b8f1e0baa1d6660285c85155917e2&auto=format&fit=crop&w=581&q=80',
  location: [location3]
})
const user4 = new User({
  firstName: 'Sally',
  lastName: 'Appleseed',
  userName: 'tapple',
  company: 'Jane Appleseed Photos',
  profilePicture: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-0.3.5&s=6b8b8f1e0baa1d6660285c85155917e2&auto=format&fit=crop&w=581&q=80',
  location: [location4]
})
const user5 = new User({
  firstName: 'Julie',
  lastName: 'Appleseed',
  userName: 'happle',
  company: 'Jane Appleseed Photos',
  profilePicture: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?ixlib=rb-0.3.5&s=6b8b8f1e0baa1d6660285c85155917e2&auto=format&fit=crop&w=581&q=80',
  location: [location5]
})



const users = [user1, user2, user3, user4, user5]
const locations = [location1, location2, location3, location4, location5]
const pictures = [pictures1]

User.remove()
  .then(() => {
    return Location.remove()
  })
  .then(() => {
    // save test data
    return User.insertMany(users)

  }).then(() => {
    return Location.create(locations)
  })
  .then((locations) => {
    console.log(locations)
    // close the database
    mongoose.connection.close()
  })
