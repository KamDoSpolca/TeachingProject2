const express = require('express');
const PhotosController = require('../controllers/photosController');
const router = express.Router();


router.get('/get-all', PhotosController.getDbPhotos);
router.get('/fake', PhotosController.getAllPhotos);

router.post('/save-one', PhotosController.savePhoto);
router.put('/update-one/:id', PhotosController.updatePhoto);
router.delete('/delete-one/:id', PhotosController.deletePhoto);

module.exports = router;
