const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const todoRoutes = require('./routes/todoRoute');

app.use('/api/v1/todos', todoRoutes);

module.exports = app;