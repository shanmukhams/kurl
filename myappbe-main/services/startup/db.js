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

const sequelize = new Sequelize("kurl", "postgres", "21051994", {
  dialect: "postgres",
  host: "localhost",
  port:5432
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync().then(result=>{
  console.log("success")
}).catch(err=>{
  console.log(err)
})

module.exports = sequelize;
