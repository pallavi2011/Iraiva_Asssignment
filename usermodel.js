const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
    },
    phone:{
        type: Number,
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('user', UserSchema);