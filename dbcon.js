var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_meshorea',
  password        : '7096',
  database        : 'cs340_meshorea'
});
module.exports.pool = pool;
