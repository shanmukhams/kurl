const { response } = require('express');
const express = require('express');
const router = express.Router();
const LogCrud = require('../addons/crud')

router.get('/lurl/:kurl', async (req, res) => {
  kurl = req.params.kurl
  console.log(req.params.kurl)
  count = await LogCrud.Groupbyurl(kurl, 'getkurl')
  res.send({count:count})
  
});

router.get('/kurl/:kurl', async (req, res) => {
    kurl = req.params.kurl
    count = await LogCrud.Groupbyurl(kurl, 'getlurl')
    res.send({count:count})
  });

router.get('/kurl/ts/:kurl', async (req, res) => {
    kurl = req.params.kurl
    agg = await LogCrud.GroupbyTime(kurl, 'getkurl')
    res.send({agg:agg})
  });
  

module.exports = router;