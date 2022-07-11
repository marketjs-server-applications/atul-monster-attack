var main_router = require('./routes/index');
const express = require("express");
const bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(main_router);

module.exports = app;