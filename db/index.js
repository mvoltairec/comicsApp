const mysql = require('mysql');
const config = require('./config.js');
const c = mysql.createConnection(config);

const getAll = function(cb) {
	// syntax for this is (SQL, response)
  c.query(`SELECT * FROM sample`, cb)
};

module.exports = {
  getAll,
  // add more (comma delimited) exports here
};
