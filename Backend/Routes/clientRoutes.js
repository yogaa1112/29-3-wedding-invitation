
const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const clientController = require('../Controller/clientController');

router.post('/buatpesanan', authMiddleware.isAuthenticated, authMiddleware.isClient, clientController.createPesanan);
router.get('/pesanan', authMiddleware.isAuthenticated, authMiddleware.isClient, clientController.getPesananKlien);

module.exports = router;
