const winston = require('winston');
const express = require('express');
const app = express();



const sequalise = require('./services/startup/db');
require('./services/startup/routes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

