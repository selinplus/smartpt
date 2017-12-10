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
      corpid: 'ding85466599d9563b4c35c2f4657eb6378f',
      corpsecret: 'RWnBryuGn3A3m4-ebknRRD8Bh1v6A_LlW9tStXAMEvX6_tebxP3G2ycb04-XOo5_',
      assist_noncestr: 'Gen911@Inue',
      agentId: { assist: '153504658' },
    },
    limit: 10,
  };
};

