const User = require('../Model/user');

exports.register = async (req, res) => {
    const { email, username, NoWa, password } = req.body;
    try {
        // Tetapkan peran "client" secara default
        const newUser = new User({ email, username, NoWa, password, role: 3 }); // 3: client
        await newUser.save();
        res.status(201).json({message: 'Registrasi berhasil. silahkan login.'});
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

        res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getProfile = async (req, res) => {
    try {
        const userId = req.session.userId;
        const user = await User.findById(userId).select('_id email username NoWa');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Error logging out' });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
};

