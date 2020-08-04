const mongooose = require('mongoose');

const JobSchema = new mongooose.Schema({
    jobtitle:  {
        type: String,
        required: true, default:''
    },
    jobdescription:  {
        type: String,
        required: true, default:''
    },
    jobType:  {
        type: String,
        required: true, default:''
    },
    status: {
        type: String,
        default: 'Not Started'
    }
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
})

module.exports = mongooose.model('Job', JobSchema);