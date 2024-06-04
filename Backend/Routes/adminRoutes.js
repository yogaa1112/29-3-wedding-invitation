
const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const adminController = require('../Controller/adminController');

router.get('/dashboard', authMiddleware.isAuthenticated, authMiddleware.isAdmin, adminController.dashboard);

module.exports = router;
