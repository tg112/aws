const express = require('express');
const cors = require('cors');
const app = express();


const router = require('./routes/router');

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());
app.use('/', router);

module.exports = app;