var mysql = require('mysql2');

var fs = require('fs');
var path = require('path');

var config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'database.json')).toString());

var connectionPool = mysql.createPool({
  connectionLimit : 10,
  host: config.main.host,
  user: config.main.user,
  password: config.main.password,
  database: config.main.database
});

module.exports = connectionPool;