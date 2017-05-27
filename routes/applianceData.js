var express = require('express');
var router = express.Router();
var Appliance = require('../models/appliance.js');
var config = require('./../config.js');

router.get('/getdata', function (req, res) {
  Appliance.findOne({ where: { id: config.testId }})
    .then(function (appliance) {
      res.json(appliance != null ? appliance.toWebObject() : null);
    })
    .catch(function (err) { res.json(err); });
});

router.post('/senddata', function (req, res) {
  var updateObject = Appliance.webObjectToUpdateObject(req.body);
  Appliance.findOrCreate({ where: { id: req.body.ID }, defaults: updateObject })
    .spread(function (appliance, created) {
      if (created) {
        return appliance.reload()
          .then(function () { res.json(appliance.toWebObject()); })
          .catch(function (err) { res.json(err); });
      } else {
        appliance.update(updateObject)
          .then(function () { res.json(appliance.toWebObject()); })
          .catch(function (err) { res.json(err); });
      }
    })
    .catch(function (err) { res.json(err); });
});

module.exports = router;