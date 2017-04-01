CREATE TABLE `customer` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,

  `mail_address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(255),
  `lastname` varchar(255),
  `street_address` varchar(255),
  `state` varchar(255),
  `postal_code` varchar(255),
  `city` varchar(255),
  `country` varchar(255),
  `default_language` varchar(255),

  `enabled` tinyint(1) NOT NULL DEFAULT 0,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `edited_at` datetime,
  `created_by` int(11),
  PRIMARY KEY (`_id`),
  UNIQUE KEY `mail_address` (`mail_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO customer (mail_address, password, enabled) VALUES (
 'demo@demo.com',
 '$2a$06$xcGp9Smb3NQBzve5jgcym.FFvUaXtGQ7EzJwCHGIQQ.jbu2zOS7CC',
 1
);