'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510920270560_3538';

  // add your config here
  config.middleware = [];

  config.user_id = 'test1';
  return config;
};
