const JobModel = require('../module/job_module')

exports.getStatusDaily = async function(req, res) {
    let jobstatus = await JobModel.find({jobType: 'daily'})
    console.log("jobstatus", jobstatus);
    if(jobstatus.length > 0) {
        jobstatus.forEach(data => {
            if(data.status == 'Not Started'){
                await JobModel.updateOne({ _id:data._id }, {$set: {status: 'Started'}})
            }
            if(data.status == 'Started'){
                await JobModel.updateOne({ _id:data._id }, {$set: {status: 'Completed'}})
            }
        });
    }
}

exports.getStatusWeekly = async function(req, res) {
    let jobstatus = await JobModel.find({jobType: 'weekly'})
    if(jobstatus.length > 0) {
        jobstatus.forEach(data => {
            if(data.status == 'Not Started'){
                JobModel.updateOne({ _id:data._id }, {$set: {status: 'Started'}})
            }
            if(data.status == 'Started'){
                JobModel.updateOne({ _id:data._id }, {$set: {status: 'Completed'}})
            }
        });
    }
}

exports.getStatusMonthly = async function(req, res) {
    let jobstatus = await JobModel.find({jobType: 'monthly'})
    if(jobstatus.length > 0) {
        jobstatus.forEach(data => {
            if(data.status == 'Not Started'){
             JobModel.updateOne({ _id:data._id }, {$set: {status: 'Started'}})
            }
            if(data.status == 'Started'){
             JobModel.updateOne({ _id:data._id }, {$set: {status: 'Completed'}})
            }
        });
    }
}

