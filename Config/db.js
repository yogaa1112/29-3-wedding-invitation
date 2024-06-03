const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Wedding_Invitation', {
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

module.exports = db;
