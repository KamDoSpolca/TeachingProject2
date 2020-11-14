const express = require('express');
const PhotosController = require('../controllers/photosController');
const router = express.Router();


router.get('/get-all', PhotosController.getDbPhotos);
router.get('/fake', PhotosController.getAllPhotos);

router.post('/save-one', PhotosController.savePhoto);
router.put('/update-one', PhotosController.updatePhoto);
router.delete('/delete-one', PhotosController.deletePhoto);

module.exports = router;
