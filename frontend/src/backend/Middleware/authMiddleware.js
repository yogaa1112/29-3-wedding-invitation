// Middleware/authMiddleware.js
exports.isAuthenticated = (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'You need to log in first' });
    }
    next();
};

exports.isSuperAdmin = (req, res, next) => {
    if (req.session.role !== 1) {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.session.role !== 2) {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

exports.isClient = (req, res, next) => {
    if (req.session.role !== 3) {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};
