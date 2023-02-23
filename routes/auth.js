const express = require('express');


const { register, login, getMe } = require('../controllers/auth')

const router = express.Router();
const { protect } = require('../middleware/auth');

// send request to register and login function
router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;