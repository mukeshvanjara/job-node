const mongooose = require('mongoose');

const UserSchema = new mongooose.Schema({
    firstName:  {
        type: String,
        required: true,default:''
    },
    lastName:  {
        type: String,
        required: true,default:''
    },
    mobile:  {
        type: Number,
        required: true,default:''
    },
    email:  {
        type: String,
        required: true,default:''
    },
    address:  {
        type: String,
        required: true,default:''
    },
    password:  {
        type: String,
        required: true,default:''
    },
    cpassword:  {
        type: String,
        required: true,default:''
    },
    is_deleted: { type: Boolean, default: false },
})

module.exports = mongooose.model('User', UserSchema);