const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.get('/profile', usersController.profileUser);


module.exports = router;