var crudRouter = require('./routes/index');
const express = require("express");
let app = express();
app.use('/crud', crudRouter);
module.exports = app;