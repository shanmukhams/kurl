const { response } = require('express');
const express = require('express');
const router = express.Router();
const LogCrud = require('../addons/crud')

router.get('/lurl/:kurl', async (req, res) => {
  kurl = req.query.kurl
  count = await LogCrud(kurl, 'getkurl')
  res.send(count)
  
});

router.get('/kurl/:kurl', async (req, res) => {
    kurl = req.query.kurl
    count = await LogCrud(kurl, 'getlurl')
    res.send(count)
  });
  

module.exports = router;