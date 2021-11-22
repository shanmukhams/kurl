const express = require('express');
const error = require('../middleware/error');

const genkurl = require('../routes/genkurl');
var cors = require('cors')

module.exports = function(app) {
  app.use(cors())
  app.use(express.json());
  app.use('/genkurl', genkurl);
  app.use(error);
}