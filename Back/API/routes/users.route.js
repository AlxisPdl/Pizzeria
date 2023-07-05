const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller.js');

// POST: Create a new user
router.post('/signup', userController.SignUp);

// POST: Login
router.post('/signin', userController.SignIn);

module.exports = router;