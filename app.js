var express = require('express');
var passport = require('./components/passportComponent.js');
var config = require('./config.js');

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
app.use(passport.initialize());
app.use(passport.session());
app.get('/', function (req, res) {
  res.json({ hello: 'world' });
});
app.use(require('./routes/applianceData.js'));
app.listen(config.port, () => { console.log("Server started on port: " + config.port); });