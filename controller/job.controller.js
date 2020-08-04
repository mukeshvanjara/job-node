var mongoose = require("mongoose");
const jobModule = require('../module/job_module')

exports.createjob = function (req, res, next) {
    jobModule.create(req.body, function (err, job) {
        if (err) return next(err);
        res.send(job);
    });
};

exports.getAllJobs = function ( req, res, next) {
    jobModule.find( function (err, job) {
        if (err) return next(err);
        res.send(job);
    });
}

exports.deleteJob = function (req, res) {
    jobModule.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Job Deleted successfully!');
    })
};

exports.getJobById = function (req, res) {
    jobModule.findById(req.params.id, function (err, job) {
        if (err) return next(err);
        res.send(job);
    })
};

exports.updateJobById = function (req, res) {
    jobModule.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send(user);
    });
};

