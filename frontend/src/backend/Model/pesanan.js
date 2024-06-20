const mongoose = require('mongoose');

const pesananSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Menyimpan ID pengguna yang memesan
    mempelaiPria: { type: String, required: true },
    mempelaiWanita: { type: String, required: true },
    email: { type: String, required: true },
    NoWa: { type: String, required: true },
    tanggalAcara: { type: Date, required: true },
    paket: { type: String, required: true },
    tema: { type: String, required: true }
});

const Pesanan = mongoose.model('Pesanan', pesananSchema);

module.exports = Pesanan;
