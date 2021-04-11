const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    fName: {
        type: String, 
        required: true,
        trim: true
    },
    lName: {
        type: String, 
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required:true,
        trim: true
    },
    addressOne: {
        type: String, 
        required: true,
        trim: true
    },
    addressTwo: {
        type: String, 
        required: false,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type:String,
        required: true,
        trim: true
    },
    zipCode: {
        type: Number,
        required: true,
        trim: true
    }   
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;