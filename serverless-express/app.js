const express = require('express');
const cors = require('cors');
const db = require("./db/database");
const app = express();
require("dotenv").config({ path: "variables.env" });

db.authenticate()
    .then(() => {
        console.log("Database connected...")
    })
    .catch(e => console.log(e.message))


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