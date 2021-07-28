var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    name: {type: String, require: true, max: 200},
    bookname: {type: String, require: true, max: 200}
});

module.exports = mongoose.model("Author", AuthorSchema, "author");
                               //model name          //collection name