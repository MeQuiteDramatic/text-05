/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574228438748_5751';

  // add your middleware config here
  config.middleware = ["params","istoken"];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

    mysql: {
      client: {
        user: "root",
        password: "root",
        host: "localhost",
        port: 3306,
        database: "zc"
      },
      app:true,
      agent:false
    },
    security:{
      csrf:false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
