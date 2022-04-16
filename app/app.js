"use strict";
const express = require('express');
const app = express();

const router = require('./routes/home');

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/', router);

module.exports = app;

