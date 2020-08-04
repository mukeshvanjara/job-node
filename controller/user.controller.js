var _ = require('lodash');
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
// var userModel = mongoose.model('User');
const userModel = require('../module/user_module')

exports.register = async function (req, res) {
    bcrypt.hash(password, 12, function(err, hash){

    });
   
    // req.body.salt = await bcrypt.genSalt();

    // req.body.hashedPassword = await bcrypt.hash(req.body.password, req.body.salt)

    userModel.findOne({ email: req.body.email ,is_deleted:false},async function (err, usr) {
        if (err) {
            console.log(err.message)
            res.send( err.message);
        }
        else {
            if (usr) {
                console.log('User already exist')
                res.send('User already exist');
            }
            else {
                await userModel.create(req.body,async function (err, user) {
                    if (err) return next(err);
                    res.send(user);
                });
            }
        }
    });
};

exports.login = function (req, res) {
    console.log(req.body)
    userModel.findOne({ email: req.body.email ,is_deleted:false}, function (err, usr) {
        if (err) return next(err);
        res.send(usr);
    });
};

exports.getAllUsers = function (req, res) {
    userModel.find({is_deleted:false}, function (err, usr) {
        if (err) return next(err);
        res.send(usr);
    });
};

exports.getUserById = function (req, res) {
    userModel.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.update = function (req, res) {
    userModel.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    });
};