var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');

var config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'database.json')).toString());

var sequelize = new Sequelize(config.main.database, config.main.user, config.main.password, {
  host: config.main.host,
  dialect: 'mysql',
  pool: {
    max: 8,
    min: 4,
    idle: 10000
  },
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

//sequelize.authenticate().then(function(errors) { console.log(errors) });

module.exports = sequelize;