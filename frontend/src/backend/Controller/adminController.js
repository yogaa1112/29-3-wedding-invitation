const Pesanan = require('../Model/pesanan');
const User = require('../Model/user');

exports.getAllPesanan = async (req, res) => {
    try {
        const pesanan = await Pesanan.find()
                                    .populate('userId', 'username') // Mengambil informasi username dari User
                                    .select('_id mempelaiPria mempelaiWanita email NoWa tanggalAcara paket tema userId'); // Memilih field yang akan ditampilkan

        res.status(200).json(pesanan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
