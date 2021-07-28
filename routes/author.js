var express = require("express");
var router = express.Router();

var authorController = require('../controllers/author');

router.get('/', authorController.showAuthor);
router.get('/:id', authorController.showAuthorById);
module.exports = router;