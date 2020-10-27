const Photo = require('../models/photos');

const mongoose = require('mongoose');

// Sample json data returned
exports.getAllPhotos = (req, res, next) => {
  res.send([
    {
      'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/7/75/Io_Joy_standard2.jpg/revision/latest?cb=20150425021126', 'title': 'Kde bolo tam bolo...'
    },
    {
      'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/9/98/Io_Disgust_standard2.jpg/revision/latest?cb=20170829015054', 'title': 'Kde bolo tam bolo...'
    },
    {
      'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/7/79/Io_Fear_standard2.jpg/revision/latest?cb=20150425021148', 'title': 'Kde bolo tam bolo...'
    },
    {
      'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/7/7a/Io_Anger_standard2.jpg/revision/latest?cb=20150425021210', 'title': 'Kde bolo tam bolo...'
    }
  ])
}

// Connection to real databaze names 'photos'
// Using a schema from schema folder
exports.getDbPhotos = (req, res, next) => {

  mongoose.model('photo', Photo.photoSchema)
    .find()
    .then(data => {
      res.status(200).json({
        data
      })
    })
}
