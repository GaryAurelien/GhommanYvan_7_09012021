const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

/* const helmet = require('helmet');
require('dotenv').config(); */


const userRoutes = require("./routes/user.routes.js");

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

/* app.use(helmet());
app.disable('x-powered-by'); */

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRoutes);


module.exports = app;