const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.connect('mongodb://localhost/node-js-api-design');

db.on('error', () => {
    console.log('Error, no conectó');
});

db.once('open', () => {
    console.log('YAY! Estamos conectados');
});
