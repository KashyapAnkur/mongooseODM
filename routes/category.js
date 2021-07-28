var express = require("express");
var router = express.Router();

var categoryController = require('../controllers/category');

router.get('/', categoryController.showCategory);
router.get('/:id', categoryController.showCategoryById);
module.exports = router;