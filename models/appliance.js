var Sequelize = require('sequelize');
var connection = require('./sequelize.js');

var Appliance = connection.define('appliance',{
  '_id': {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    autoIncrement: true
  },
  'id': {
    type: Sequelize.BIGINT(11)
  },
  'status': {
    type: Sequelize.BIGINT(11)
  },
  'water_hardness': {
    type: Sequelize.BIGINT(11)
  },
  'ph': {
    type: Sequelize.FLOAT(8,8)
  },
  'turbidity': {
    type: Sequelize.BIGINT(11)
  },
  'water_temperature': {
    type: Sequelize.FLOAT(8,8)
  },
  'water_color': {
    type: Sequelize.BIGINT(11)
  },
  'appliance_name': {
    type: Sequelize.STRING
  },
  'message_string': {
    type: Sequelize.STRING
  },
  'copper_released': {
    type: Sequelize.FLOAT(8,8)
  },
  'container_ml_capacity': {
    type: Sequelize.BIGINT(11)
  },
  'container_cu_level': {
    type: Sequelize.BIGINT(11)
  },
  'copper_electrode_mass': {
    type: Sequelize.BIGINT(11)
  },
  'water_flow': {
    type: Sequelize.FLOAT(8,8)
  },
  'water_volume': {
    type: Sequelize.BIGINT(11)
  },
  'key_1': {
    type: Sequelize.STRING
  },
  'key_2': {
    type: Sequelize.STRING
  },
  'key_3': {
    type: Sequelize.STRING
  },
  'on_time': {
    type: Sequelize.BIGINT(11)
  },
  'station_ssid': {
    type: Sequelize.STRING
  },
  'station_pwd': {
    type: Sequelize.STRING
  },
  'created_at': {
    type: Sequelize.DATE
  },
  'edited_at': {
    type: Sequelize.DATE
  },
  'created_by': {
    type: Sequelize.BIGINT(11)
  }
},{
  classMethods: {
    webObjectToUpdateObject: function (webObject) {
      var massAssignable = [
        'Status', 'status',
        'WaterHardness', 'water_hardness',
        'PH', 'ph',
        'Turbidity', 'turbidity',
        'WaterTemperature', 'water_temperature',
        'WaterColor', 'water_color',
        'ApplianceName', 'appliance_name',
        'MessageString', 'message_string',
        'CopperReleased', 'copper_released',
        'ContainerMLCapacity', 'container_ml_capacity',
        'ContainerCuLevel', 'container_cu_level',
        'CopperElectrodeMass', 'copper_electrode_mass',
        'WaterFlow', 'water_flow',
        'WaterVolume', 'water_volume',
        'Key1', 'key_1',
        'Key2', 'key_2',
        'Key3', 'key_3',
        'OnTime', 'on_time',
        'StationSSID', 'station_ssid',
        'StationPwd', 'station_pwd'
      ];
      var updateObject = {};
      for (var i = 0; massAssignable.length > i; i += 2) {
        if (webObject[massAssignable[i]] !== undefined && webObject[massAssignable[i]] !== '') {
          updateObject[massAssignable[i + 1]] = webObject[massAssignable[i]];
        }
      }
      return updateObject;
    }
  },
  instanceMethods: {
    toWebObject: function () {
      return {
        'Status': this['status'],
        'WaterHardness': this['water_hardness'],
        'PH': this['ph'],
        'Turbidity': this['turbidity'],
        'WaterTemperature': this['water_temperature'],
        'WaterColor': this['water_color'],
        'ApplianceName': this['appliance_name'],
        'MessageString': this['message_string'],
        'CopperReleased': this['copper_released'],
        'ContainerMLCapacity': this['container_ml_capacity'],
        'ContainerCuLevel': this['container_cu_level'],
        'CopperElectrodeMass': this['copper_electrode_mass'],
        'WaterFlow': this['water_flow'],
        'WaterVolume': this['water_volume'],
        'Key1': this['key_1'],
        'Key2': this['key_2'],
        'Key3': this['key_3'],
        'OnTime': this['on_time'],
        'StationSSID': this['station_ssid'],
        'StationPwd': this['station_pwd'],
        'ID': this['id']
      };
    }
  }
});

module.exports = Appliance;