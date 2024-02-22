const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(401);
        throw new Error('Missing required fields for registration');
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400);
        throw new Error('User already registered');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`hashedPassword: ${hashedPassword}`);
    const user = await User.create({ username, email, password: hashedPassword });
    console.log(`User created: ${user}`);
    if (user) {
        res.status(201).json(user);
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const loginUser = asyncHandler(async (req, res) => {
});

const profileUser = asyncHandler(async (req, res) => {
});

module.exports = {
    registerUser,
    loginUser,
    profileUser,
};
