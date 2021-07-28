const authorModel = require('../models/author');

exports.showAuthor = function(req,res) {
    authorModel.find(function(err, author_list) {
        let html = ``;
        author_list.forEach( (al) => {
            html += `ID:--- <strong>${al._id}</strong>, Name:--- <strong>${al.name}</strong>, Book Name:--- <strong>${al.bookname}</strong><br />`;
        });
        res.send(html);
    });
}

exports.showAuthorById = function(req,res) {
    authorModel.findById(req.params.id, function(err,author) {
        let html = ``;
        html += `ID:--- <strong>${author._id}</strong>, Name:--- <strong>${author.name}</strong>, Book Name:--- <strong>${author.bookname}</strong><br />`;
        res.send(html);
    });
};