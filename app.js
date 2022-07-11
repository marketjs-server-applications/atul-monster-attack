var crudRouter = require('./routes/index');
const express = require("express");

let app = express();
var port = "3000";

// app.set('port', port);

console.log(port);

app.use('/crud', crudRouter);

module.exports = app;
