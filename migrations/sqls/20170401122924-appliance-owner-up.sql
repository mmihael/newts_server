CREATE TABLE `appliance_owner` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,

  `appliance_id` int(11),
  `customer_id` int(11),
  `registration_date` datetime,
  `appliance_ver` varchar(255),
  `sensor_ver` varchar(255),
  `wifi_ver` varchar(255),

  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `edited_at` datetime,
  `created_by` int(11),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
