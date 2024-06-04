
const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const clientController = require('../Controller/clientController');

router.get('/dashboard', authMiddleware.isAuthenticated, authMiddleware.isClient, clientController.dashboard);

module.exports = router;
