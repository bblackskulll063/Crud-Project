const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    rank:{
        type:Number,
        unique: true
    },

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        
    },
    dob:{
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    },
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;