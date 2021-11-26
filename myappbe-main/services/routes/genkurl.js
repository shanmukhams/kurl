const express = require('express');
const md5 = require("md5")
const router = express.Router();
const Url = require("../models/Url");




router.post('/', async (req, res) => {
  lurl = req.body.lurl
  console.log(lurl)
  md5string = md5(lurl["url"])

  // bin = require("../addons/str2binary")(md5string)
  // console.log(bin)
  
  // create a buffer
  const buff = Buffer.from(md5string, 'utf-8');

  // decode buffer as Base64
  const base64 = buff.toString('base64');
  // print Base64 string
  char7base64 = base64.substring(0,8)





  res.send(char7base64);
});


module.exports = router;