'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_sequelize-example';

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg_sequelize',
    host: '127.0.0.1',
		port: 3306,
		password: 'root',
	};
	
	config.security = {
		csrf: {
			enable: false
		}
	}

  return config;
};
