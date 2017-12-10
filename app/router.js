

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/product/list', app.controller.product.list);
  app.get('/product/history', app.controller.product.history);
  app.get('/customer/query', app.controller.customer.query);
  app.post('/customer/add', app.controller.customer.add);
  app.get('/customer/list', app.controller.customer.list);
  app.get('/customer/month', app.controller.customer.month);
  app.get('/customer/timeLine', app.controller.customer.timeLine);
  app.get('/orders/month', app.controller.orders.monthStatistic);
  app.post('/orders/save', app.controller.orders.save);
  app.get('/orders/list', app.controller.orders.list);
  app.get('/orders/historyStatistic', app.controller.orders.historyStatistic);
  app.get('/orders/monthStatistic', app.controller.orders.monthStatistic);
  // dingTalk according
  app.get('/dingtalk/userlist', app.controller.dingtalk.userList);
  app.get('/dingtalk/init', app.controller.dingtalk.init);
  app.post('/dingtalk/authtalk', app.controller.dingtalk.authtalk);
  app.post('/dingtalk/mounted', app.controller.dingtalk.mounted);
  // app.get('*', app.controller.home.index);
};
