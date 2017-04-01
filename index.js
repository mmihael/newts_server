var express = require('express');
var passport = require('./components/passportComponent.js');
var mysql = require('./components/mysqlComponent.js');

var app = express();
app.use(require('cookie-parser')());
app.use(require('body-parser').json({ type: 'application/json' }));
app.use(require('express-session')({
    secret: 'newts_server',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static('public'));
// todo: DEV ONLY
app.use(function (req, res, next) { console.log(req.url); next(); });
// todo: DEV ONLY
app.use(function (req, res, next) { res.mysql = mysql; next(); });
app.use(passport.initialize());
app.use(passport.session());
app.get('/', function (req, res) {
  res.json({ hello: 'world' });
});
require('./routes/applianceData.js')(app);
app.listen(3000, () => { console.log(__dirname); });