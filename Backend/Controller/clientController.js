const User = require('../Model/user');

exports.dashboard = (req, res) => {
    res.status(200).json({ message: 'Ini Dashboard Client'});
};

//nanti bisa ditambahkan fitur mengirimkan form pesanan