const express = require('express');
const usersController = require('../controllers/usersController');
const validateToken = require('../middlewares/validateTokenHandler');

const router = express.Router();

router.post('/register', usersController.registerUser);
router.post('/login', usersController.loginUser);
router.get('/profile', validateToken, usersController.profileUser);


module.exports = router;