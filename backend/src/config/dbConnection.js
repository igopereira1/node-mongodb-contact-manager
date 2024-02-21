const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            'MongoDB connection SUCCESS',
            connect.connection.host,
            connect.connection.name,
            connect.connection.port
        );
    } catch (err) {
        console.error(err);
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
};

module.exports = connectDB;
