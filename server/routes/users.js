var express = require('express');
var router = express.Router();
const userController = require('../controller/users.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', userController.profile)

router.post('/register', userController.register)

router.post('/login', userController.login)

router.put('/edit-profile',userController.update)

router.delete('/delete', userController.delete)

module.exports = router;
