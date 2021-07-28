const userModel = require('../models/user');

exports.showUser = function(req,res) {
    userModel.find(function(err, user_list) {
        let html = ``;
        user_list.forEach( (al) => {
            html += `ID:--- <strong>${al._id}</strong>, Username:--- <strong>${al.username}</strong>, Email:--- <strong>${al.email}</strong>, Password:--- <strong>${al.password}</strong>, Created At:--- <strong>${al.createdAt}</strong><br />`;
        });
        res.send(html);
    });
}

exports.showUserById = function(req,res) {
    userModel.findById(req.params.id, function(err,user) {
        let html = ``;
        html += `ID:--- <strong>${user._id}</strong>, Username:--- <strong>${user.username}</strong>, Email:--- <strong>${user.email}</strong>, Password:--- <strong>${user.password}</strong>, Created At:--- <strong>${user.createdAt}</strong><br />`;
        res.send(html);
    });
};