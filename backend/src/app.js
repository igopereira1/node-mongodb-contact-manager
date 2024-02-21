const express = require('express');
const router = require('./routes/contactRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const connectDB = require('./config/dbConnection');

connectDB();
const app = express();

app.use(express.json());
app.use('/api/contacts', router);
app.use(errorHandler);

module.exports = app;