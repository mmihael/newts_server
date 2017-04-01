var applianceModel = {
  'Status': { dbName: 'status' },
  'WaterHardness': { dbName: 'water_hardness' },
  'PH': { dbName: 'ph' },
  'Turbidity': { dbName: 'turbidity' },
  'WaterTemperature': { dbName: 'water_temperature' },
  'WaterColor': { dbName: 'water_color' },
  'ApplianceName': { dbName: 'appliance_name' },
  'MessageString': { dbName: 'message_string' },
  'CopperReleased': { dbName: 'copper_released' },
  'ContainerMLCapacity': { dbName: 'container_ml_capacity' },
  'ContainerCuLevel': { dbName: 'container_cu_level' },
  'CopperElectrodeMass': { dbName: 'copper_electrode_mass' },
  'WaterFlow': { dbName: 'water_flow' },
  'WaterVolume': { dbName: 'water_volume' },
  'Key1': { dbName: 'key_1' },
  'Key2': { dbName: 'key_2' },
  'Key3': { dbName: 'key_3' },
  'OnTime': { dbName: 'on_time' },
  'StationSSID': { dbName: 'station_ssid' },
  'StationPwd': { dbName: 'station_pwd' }
};

module.exports = function (app) {

  app.get('/getdata', function (req, res) {
    res.mysql.query('SELECT * FROM appliance LIMIT 1', function (err, rows, fields) {
      if (err) {
        var errMessage = 'Error fetching appliance';
        console.log(err);
        console.log(errMessage);
        return res.json({ status: 'error', message: errMessage });
      }
      if (rows.length === 1) {
        var fields = Object.keys(applianceModel);
        var json = {};
        for (var i = 0; i < fields.length; i++) {
          json[fields[i]] = rows[0][applianceModel[fields[i]].dbName];
        }
        json.ID = rows[0].id;
        return res.json(json);
      } else {
        res.json({ status: 'error', message: 'No appliance found' });
      }
    });
  });

  app.post('/senddata', function (req, res) {
    res.mysql.query('SELECT * FROM appliance WHERE id = ? LIMIT 1', [req.body.ID], function (err, rows) {

      if (err) {
        var errMessage = 'Error fetching appliance';
        console.log(err);
        console.log(errMessage);
        return res.json({ status: 'error', message: errMessage });
      }

      var query = [];
      var fieldValues = [];

      if (rows.length === 1) {
        var fields = Object.keys(applianceModel);
        for (var i = 0; i < fields.length; i++) {
          if (req.body[fields[i]] != null) {
            query.push(applianceModel[fields[i]].dbName + '=?');
            fieldValues.push(req.body[fields[i]]);
          }
        }
        if (query.length !== 0) {
          fieldValues.push(req.body.ID);
          console.log('UPDATE appliance SET ' + query.join(', ') + ' WHERE id = ? LIMIT 1');
          res.mysql.query('UPDATE appliance SET ' + query.join(', ') + ' WHERE id = ? LIMIT 1',
          fieldValues,
          function (err, result) {
            if (err) {
              var errMessage = 'Failed updating appliance';
              console.log(err);
              console.log(errMessage);
              return res.json({ status: 'error', message: errMessage });
            }
            if (result.affectedRows === 1) {
              return res.json({ status: 'success', message: 'Appliance updated' });
            } else {
              return res.json({ status: 'error', message: 'Failed updating appliance (ID: ' + req.body.ID + ')' });
            }
          });
        }
      } else {
        res.json({ status: 'error', message: 'Appliance not found' });
      }

    });
  });

};