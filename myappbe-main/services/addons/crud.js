const Log = require("../models/Log");

module.exports = {
    Insert: function (insertLog) {
      var newLog = new Log(insertLog);
      newLog.save().then((data) => {
        dbreslog = data.dataValues;
        console.log(dbreslog)
      })
      .catch((error) => {
          console.log(error);
      });
    },

    Groupbyurl: async function(url, action){
      const { count, rows } = await Log.findAndCountAll({
        where: {
          kurl: url,
          action:action
        },
      });
      console.log(count);
      return count
    },

  
   
  };