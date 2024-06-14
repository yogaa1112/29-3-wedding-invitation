const Pesanan = require('../Model/pesanan');

exports.createPesanan = async (req, res) => {
    const { mempelaiPria, mempelaiWanita, email, NoWa, tanggalAcara, paket, tema } = req.body;
    const userId = req.session.userId; // Ambil ID pengguna dari sesi

    try {
        const newPesanan = new Pesanan({ 
            userId,
            mempelaiPria, 
            mempelaiWanita, 
            email, 
            NoWa, 
            tanggalAcara, 
            paket, 
            tema 
        });
        await newPesanan.save();
        res.status(201).json({ message: 'Pesanan berhasil dibuat', pesanan: newPesanan });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPesananKlien = async (req, res) => {
    const userId = req.session.userId; // Ambil ID pengguna dari sesi

    try {
        const pesanan = await Pesanan.find({ userId });
        res.status(200).json(pesanan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//nanti bisa ditambahkan fitur mengirimkan form pesanan