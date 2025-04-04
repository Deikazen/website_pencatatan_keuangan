const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username : {
        type : String,
        required: true,
        unique:true,
    },
    email : {
        type : String,
        required : true,
        unique: true,
    },
    password: {
        type : String,
        required: true,
    },
    data : {
        type : Map,
        of: mongoose.Schema.Types.Mixed   // key - value
    }
});

module.exports= mongoose.model('User', UserSchema);