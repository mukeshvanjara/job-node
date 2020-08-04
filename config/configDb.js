const mongoose = require('mongoose');
const  { db } = require('./config')

mongoose.connect(db, { useNewUrlParser: true });

// When successfully connected
mongoose.connection.on('connected', () => {
    console.info(`Mongoose default connection open`);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.error('Mongoose default connection error: ' + err.message);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.info('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.debug('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
