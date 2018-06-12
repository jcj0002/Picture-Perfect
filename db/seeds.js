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
  pictureItself: 'https://images.unsplash.com/photo-1523297428500-14eaf71c6840?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=450c4490b3f615f2f88631a2ba72ed05&auto=format&fit=crop&w=1650&q=80',
  date: new Date(2008, 1, 10)

})
const pictures2 = new Picture({
  userName: 'japple',
  description: 'picture of flower',
  information: 'taken with canon 5D',
  pictureItself: 'https://images.unsplash.com/photo-1494948858638-8f2f3be0ef78?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=144742d6a8de74c21ae578c55dac8944&auto=format&fit=crop&w=1650&q=80',
  date: new Date(2008, 1, 10)

})
const pictures3 = new Picture({
  userName: 'japple',
  description: 'picture of flower',
  information: 'taken with canon 5D',
  pictureItself: 'https://images.unsplash.com/photo-1509407336566-fca158fddcce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d897c13a777d2ca03566e1686da313d6&auto=format&fit=crop&w=800&q=60',
  date: new Date(2008, 1, 10)

})
const pictures4 = new Picture({
  userName: 'japple',
  description: 'picture of flower',
  information: 'taken with canon 5D',
  pictureItself: 'https://images.unsplash.com/photo-1476067897447-d0c5df27b5df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a7c6744dc3a6d90547fef7af7adf0ad9&auto=format&fit=crop&w=1650&q=80',
  date: new Date(2008, 1, 10)

})
const pictures5 = new Picture({
  userName: 'japple',
  description: 'picture of flower',
  information: 'taken with canon 5D',
  pictureItself: 'https://images.unsplash.com/photo-1517866677952-8fe36fb31883?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a842985038a2df1ef396da8c272112c&auto=format&fit=crop&w=1650&q=80',
  date: new Date(2008, 1, 10)

})
const location1 = new Location({
  state: 'Alabama',
  pictures: [pictures1]

})
const location2 = new Location({
  state: 'Georgia',
  pictures: [pictures2]

})
const location3 = new Location({
  state: 'Florida',
  pictures: [pictures3]

})
const location4 = new Location({
  state: 'Tennessee',
  pictures: [pictures4]

})

const location5 = new Location({
  state: 'Mississippi',
  pictures: [pictures5]

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
const pictures = [pictures1,pictures2,pictures3,pictures4,pictures5]

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
