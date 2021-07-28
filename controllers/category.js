const categoryModel = require('../models/category');

exports.showCategory = function(req,res) {
    categoryModel.find(function(err, category_list) {
        let html = ``;
        category_list.forEach( (al) => {
            html += `ID:--- <strong>${al._id}</strong>, Name:--- <strong>${al.name}</strong>, Description:--- <strong>${al.description}</strong><br />`;
        });
        res.send(html);
    });
}

exports.showCategoryById = function(req,res) {
    categoryModel.findById(req.params.id, function(err,category) {
        let html = ``;
        html += `ID:--- <strong>${category._id}</strong>, Name:--- <strong>${category.name}</strong>, Book Name:--- <strong>${category.description}</strong><br />`;
        res.send(html);
    });
};