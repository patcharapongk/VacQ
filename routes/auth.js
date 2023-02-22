const express = require('express');


const { register, login } = require('../controllers/auth')

const router = express.Router();

// send request to register and login function
router.post('/register', register);
router.post('/login', login);

module.exports = router;