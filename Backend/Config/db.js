const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:bWuOUVojxaNtnv7m@cluster0.hg3bibu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

module.exports = db;
