const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const superAdminController = require('../Controller/superAdminController');

router.post('/addAdmin', authMiddleware.isAuthenticated, authMiddleware.isSuperAdmin, superAdminController.addAdmin);
router.get('/admins', authMiddleware.isAuthenticated, authMiddleware.isSuperAdmin, superAdminController.getAdmins);
router.get('/clients',authMiddleware.isAuthenticated, authMiddleware.isSuperAdmin, superAdminController.getClients);
router.delete('/admin/:adminId', authMiddleware.isAuthenticated, authMiddleware.isSuperAdmin, superAdminController.deleteAdmin);
router.delete('/client/:clientId', authMiddleware.isAuthenticated, authMiddleware.isSuperAdmin, superAdminController.deleteClient);


module.exports = router;
