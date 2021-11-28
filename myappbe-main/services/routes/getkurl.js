const { response } = require('express');
const express = require('express');
const md5 = require("md5")
const router = express.Router();
const Url = require("../models/Url");
const LogCrud = require('../addons/crud');
const { INTEGER } = require('sequelize/dist');




router.post('/', async (req, res) => {
  lurl = req.body.lurl

  

  md5string = md5(lurl)

  // bin = require("../addons/str2binary")(md5string)
  // console.log(bin)
  
  // create a buffer
  const buff = Buffer.from(md5string, 'utf-8');

  // decode buffer as Base64
  const base64 = buff.toString('base64');
  // print Base64 string
  char7base64 = base64.substring(0,6)

  

  try{
    const [url, created] = await Url.findOrCreate({
      where: { lurl: lurl },
      defaults: {
        kurl: char7base64
      }
    });
    if (created) {
      console.log(url.kurl); 
      LogCrud.Insert({lurl:lurl,kurl:char7base64, action:'creation'})
    }
    else{
      LogCrud.Insert({lurl:lurl,kurl:url.kurl, action:'getkurl'})
    }

    res.send(url);
  }

  catch(error){
    if(error.name == "SequelizeUniqueConstraintError"){
      var counter = 1
      while(dbinsert == true){
        kurl = kurl+counter.toString()
        try{
          const url = await Url.create({ lurl: lurl, kurl: kurl, extraChar: counter.toString()});
          dbinsert = false
          LogCrud.Insert({lurl:lurl,kurl:char7base64, action:'creation'})

          res.send(url);
        }
        catch(err){
          if(err.name = "SequelizeUniqueConstraintError"){
            counter+=1
          }
          else{
            res.status(400).send({
              message: 'This is an error!'
           });
          }
        }
        
      }
    }
    else{
      res.status(400).send({
        message: 'This is an error!'
     });
    }
  }

  
});


module.exports = router;