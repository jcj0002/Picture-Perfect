const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose')
// mongoose.connect('mongodb://localhost/Picture-Perfect')

// mongoose.connect(process.env.MONGODB_URI)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
