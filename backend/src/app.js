const express = require('express');
const contactRouter = require('./routes/contactRoutes');
const userRouter = require('./routes/userRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const connectDB = require('./config/dbConnection');

connectDB();
const app = express();

app.use(express.json());
app.use('/api/contacts', contactRouter);
app.use('/api/users', userRouter);
app.use(errorHandler);

module.exports = app;