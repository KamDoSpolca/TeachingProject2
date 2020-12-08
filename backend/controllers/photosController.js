const Photo = require('../models/photosModel');

const mongoose = require('mongoose');

// Sample json data returned
exports.getAllPhotos = (req, res, next) => {
  res.send([
    { 'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/7/75/Io_Joy_standard2.jpg/revision/latest?cb=20150425021126', 'title': ' Dzoj' },
    { 'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/9/98/Io_Disgust_standard2.jpg/revision/latest?cb=20170829015054', 'title': 'Disgas' },
    { 'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/7/79/Io_Fear_standard2.jpg/revision/latest?cb=20150425021148', 'title': 'Fia' },
    { 'id': '3261', 'thumbnailUrl': 'https://vignette.wikia.nocookie.net/pixar/images/7/7a/Io_Anger_standard2.jpg/revision/latest?cb=20150425021210', 'title': 'Enga' }
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


exports.savePhoto = (req, res, next) => {

  

  const fotecka = new Photo({
    title: req.body.photoTitle, 
    url: req.body.photoUrl
  });
  console.log("sluchatka")
  fotecka.save().then(response => {
    res.status(200).json({
      message: 'created successfully'
    })
  })
    .catch(error => {
      res.status(500).json({
        message: 'an error occured'
      })
    });
}

exports.updatePhoto = (req, res, next) => {
  // Put here your own database item ID
  const updateId = '5fafee470217895c944e2800';
  const fotecka = new Photo({
    _id: updateId,
    title: 'nedelne rano',
    url: 'https://myocn.net/wp-content/uploads/2013/05/inexpressible_joy-1.jpg'
  });

  Photo.updateOne({ _id: updateId, }, fotecka)
    .then(response => {
      res.status(200).json({
        message: 'updated successfully'
      })
    })
    .catch(error => {
      res.status(500).json({
        message: 'an error occured'
      })
    })
}

exports.deletePhoto = (req, res, next) => {
  // Put here your own database item ID
  const deleteId = '5faff0476a57fd5dcc47bfeb';

  Photo.deleteOne({ _id: deleteId }).
    then(response => {
      res.status(200).json({
        message: 'deleted successfully'
      })
    })
    .catch(error => {
      res.status(500).json({
        message: 'an error occured'
      })
    })  
}
