const winston = require('winston');

// const Pool = require('pg').Pool

// module.exports = function() {
//   const pool = new Pool({
//     user: 'shanmukhams',
//     host: 'localhost',
//     database: 'kurl',
//     password: '21051994',
//     port: 5432,
//   })

//   pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })

// }

const Sequelize = require("sequelize");

const sequelize = new Sequelize("kurl", "shanmukhams", "21051994", {
  dialect: "postgres",
  host: "localhost",
  port:5432
});

sequelize.sync().then(result=>{
  console.log("success")
}).catch(err=>{
  console.log(err)
})

module.exports = sequelize;
