const express = require('express');
const cors = require('cors');
const app = express();

const alertRoutes = require('./src/routes/alerts');
const viewRoutes = require('./src/routes/views');
const emailRoutes = require('./src/routes/email');

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());
app.use('/api', alertRoutes);
app.use('/api', emailRoutes);
app.use('/', viewRoutes);

module.exports = app;