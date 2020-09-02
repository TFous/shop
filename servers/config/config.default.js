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
  config.keys = appInfo.name + '_1598338949009_6380';

  // add your middleware config here
  config.middleware = [];
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'test_db',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
  };
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'test_db',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.CORS  = {
    // origin: 'localhost:8080',
    origin: '*',
    credentials:true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  config.security = {
    csrf: {
      enable: false,
      // headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
    domainWhiteList: [ 'http://localhost:8080','http://localhost:8081','http://tenggg.win:7001']
  };
  return {
    ...config,
    ...userConfig,
  };
};
