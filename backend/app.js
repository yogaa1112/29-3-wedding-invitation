require('dotenv').config();
const express = require('express');
const session = require('express-session');
const db = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const superAdminRoutes = require('./Routes/superAdminRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const clientRoutes = require ('./Routes/clientRoutes');

const app = express();

app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send('App berjalan')
});

app.use('/auth', authRoutes);
app.use('/superAdmin', superAdminRoutes);
app.use('/admin', adminRoutes);
app.use('/client', clientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Create initial super admin
(async () => {
    const User = require('./Model/user');
    const superAdmin = await User.findOne({ role: 1 });
    if (!superAdmin) {
        const newSuperAdmin = new User({
            email: 'superadmin@gmail.com',
            username: 'superadmin',
            password: 'superadminpassword',
            role: 1
        });
        await newSuperAdmin.save();
        console.log('Super admin created');
    }
})();
