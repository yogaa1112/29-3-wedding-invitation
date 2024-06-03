const User = require('../Model/user');

exports.register = async (req, res) => {
    const { email, username, password } = req.body;
    try {
        // Tetapkan peran "client" secara default
        const newUser = new User({ email, username, password, role: 3 }); // 3: client
        await newUser.save();
        res.redirect('/login'); // Sesuaikan dengan rute login yang Anda miliki
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        req.session.userId = user._id;
        req.session.role = user.role;

        // Redirect based on role
        let redirectTo;
        if (user.role === 1) { // Super Admin
            redirectTo = '/superAdmin/dashboard';
        } else if (user.role === 2) { // Admin
            redirectTo = '/admin/dashboard';
        } else if (user.role === 3) { // Client
            redirectTo = '/client/dashboard';
        } else {
            return res.status(400).json({ message: 'Invalid user role' });
        }

        res.status(200).json({ message: 'Logged in successfully', redirectTo });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



      /*  res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.loginRedirect = (req, res) => {
    // Mendapatkan peran pengguna dari sesi
    const role = req.session.role;
    
    // Arahkan pengguna ke halaman dashboard berdasarkan perannya
    if (role === 1) { // Super admin
        return res.redirect('/superAdmin');
    } else if (role === 2) { // Admin
        return res.redirect('/adminDashboard');
    } else if (role === 3) { // Client
        return res.redirect('/clientDashboard');
    } else {
        // Penanganan jika peran tidak dikenali
        return res.status(400).json({ message: 'Invalid user role' });
    }
}; */


exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Error logging out' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
};

