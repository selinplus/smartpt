/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

module.exports = () => {
  return {
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: '127.0.0.1',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'good88Luck',
        // 数据库名
        database: 'selin',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    dingtalk: {
      corpid: 'ding83527a7c6cc1647635c2f4657eb6378f',
      corpsecret: 'mi6Iot2PRr0niD8ufCnMjfDKx4oBYLWeF8PHuBseeABD8sBFLQJAcKjlqWaBEEcr',
      assist_noncestr: 'Gen911@Inue',
    },
    limit: 10,
  };
};

