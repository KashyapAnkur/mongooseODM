var express = require("express");
var router = express.Router();

var userController = require('../controllers/user');

router.get('/', userController.showUser);
router.get('/:id', userController.showUserById);
module.exports = router;