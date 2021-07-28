var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: {type: String, require: true, max: 40},
    description: {type: String, require: true, max: 200}
});

module.exports = mongoose.model("Category", CategorySchema, "category");
                               //model name          //collection name