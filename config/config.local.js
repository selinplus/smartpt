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
      corpid: 'dingd1a7149886463b3735c2f4657eb6378f',
      corpsecret: 'bVZ8Iahr0Tqt9NJ5PjWYr2WDMfEWNKML7bincqlM0CgYot4lUGtdNK94BLDIbUzm',
      assist_noncestr: 'Gen911Inue',
      agentId: { assist: '153562285' },
    },
    limit: 10,
  };
};

