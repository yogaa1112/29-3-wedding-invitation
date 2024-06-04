const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/authMiddleware');
const superAdminController = require('../Controller/superAdminController');

router.get('/dashboard', authMiddleware.isAuthenticated, authMiddleware.isSuperAdmin, superAdminController.dashboard);
router.post('/addAdmin', authMiddleware.isAuthenticated, authMiddleware.isSuperAdmin, superAdminController.addAdmin);
router.get('/admins', authMiddleware.isAuthenticated, authMiddleware.isSuperAdmin, superAdminController.getAdmins);
router.delete('/admin/:adminId', authMiddleware.isAuthenticated, authMiddleware.isSuperAdmin, superAdminController.deleteAdmin);


module.exports = router;
