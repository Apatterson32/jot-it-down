const express = require('express');
const notesRouter = require('./notes');

// Initialize app using express
const app = express();

app.use('/notes', notesRouter);

module.exports = app;