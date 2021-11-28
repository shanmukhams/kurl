const { response } = require('express');
const express = require('express');
const router = express.Router();
const Url = require("../models/Url");
const LogCrud = require('../addons/crud')


router.get('/', async (req, res) => {
  kurl = req.query.kurl
  Url.findByPk(kurl).then((data) => {
    dbres = data.dataValues;
    console.log(dbres)
    
    LogCrud.Insert({kurl:kurl, action:'getlurl'})

    res.send(dbres);
    
    
  })
  .catch((error) => {
      console.log(error);
      res.status(400).send({
        message: 'This is an error!'
     });})
     

  

  


  
});


module.exports = router;