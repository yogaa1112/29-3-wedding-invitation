const User = require('../Model/user');


exports.addAdmin = async (req, res) => {
    const { email, username, NoWa, password } = req.body;
    try {
        const newAdmin = new User({ email, username, NoWa, password, role: 2 }); // 2: admin
        await newAdmin.save();
        res.status(201).json({ message: 'Admin added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: 2 }).select('_id email username NoWa'); // 2: admin
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ 
            error: error.message 
        });
    }
};

exports.getClients = async (req, res) => {
    try {
        const client = await User.find({role: 3}).select ('_id email username NoWa'); // 3: client
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.deleteAdmin = async (req, res) => {
    const { adminId } = req.params;
    try {
        const result = await User.deleteOne({ _id: adminId, role: 2 }); // Pastikan role 2: admin
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteClient = async (req, res) => {
    const { clientId } = req.params;
    try {
        const result = await User.deleteOne({ _id: clientId, role: 3 }); // Pastikan role 3: client
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'client not found' });
        }
        res.status(200).json({ message: 'client berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
