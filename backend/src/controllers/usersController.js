const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

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
    const user = await User.create({ username, email, password: hashedPassword });
    if (user) {
        res.status(201).json(user);
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('Missing required fields for login');
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            
            {
                id: user.id,
                email: user.email,
                username: user.username,
            },
            
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        console.log(`accessToken: ${accessToken}`);
        res.json({ accessToken });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

const profileUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {
    registerUser,
    loginUser,
    profileUser,
};
