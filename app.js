const startproxy = require('./util/startproxy');
const info = require('./util/info');
module.exports = app => {
  app.beforeStart(async () => {
    // 开发模式下对webpack dev server进行代理
    if (process.env.NODE_ENV === 'development') {
      startproxy(app);
      info.showEnv('已开启对web-dev-server：9000端口代理，访问public将转向webpack-server');
    }
  });
};
