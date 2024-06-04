const User = require('../Model/user');

exports.dashboard = (req, res) => {
    res.status(200).json({ message: 'Ini Dashboard Admin'});
};

//nanti bisa ditambahkan fitur menampilkan data form pesanan yang dikirimkan dari user