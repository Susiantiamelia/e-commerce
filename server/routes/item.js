var express = require('express');
var router = express.Router();
var itemController = require('../controller/item.js')
var images = require('../helpers/images')

router.post('/post-item',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  itemController.create)

router.get('/all', itemController.all)

router.get('/category/:category', itemController.category)

router.get('/milk/:id', itemController.milk)

router.put('/update/:id', itemController.update)

router.delete('/delete/:id', itemController.delete)

module.exports = router