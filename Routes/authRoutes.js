const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');
const authMiddleware = require('../Middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authMiddleware.isAuthenticated, authController.logout);


module.exports = router;
