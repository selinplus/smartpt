const startproxy = require('./util/startproxy');
const info = require('./util/info');
module.exports = app => {
  app.beforeStart(async () => {
    // 启动时进行
    info.showEnv();
    // 开发模式下对webpack dev server进行代理
    if (process.env.NODE_ENV === 'development') {
      startproxy(app);
    }
  });
};
