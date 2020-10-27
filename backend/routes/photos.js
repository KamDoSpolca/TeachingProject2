const express = require('express');
const PhotosController = require('../controllers/photos');
const router = express.Router();


router.get('/db', PhotosController.getDbPhotos);
router.get('/fake', PhotosController.getAllPhotos);

module.exports = router;
