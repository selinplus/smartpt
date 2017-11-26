const proxy = require('koa-proxy');

// 开启对webpackdev Server的代理
module.exports = app => {
  const config = {
    host: 'http://localhost:9000', // target host that matched path will be proxy to
    match: /\/public/, // path pattern.
  };
  app.use(proxy(config));
};
