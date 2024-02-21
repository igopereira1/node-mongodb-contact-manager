const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter your username'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: [true, 'This email already exists'],
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);