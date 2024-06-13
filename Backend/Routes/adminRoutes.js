
const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const adminController = require('../Controller/adminController');

router.get('/pesanan', authMiddleware.isAuthenticated, authMiddleware.isAdmin, adminController.getAllPesanan);

module.exports = router;
