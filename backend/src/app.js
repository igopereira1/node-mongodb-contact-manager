const express = require('express');
const router = require('./routes/contactRoutes');

const app = express();

app.use(express.json());
app.use('/api/contacts', router);

module.exports = app;