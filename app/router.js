

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/product/list', app.controller.product.list);
  app.get('/customer/query', app.controller.customer.query);
  app.post('/customer/add', app.controller.customer.add);
  app.get('/customer/list', app.controller.customer.list);
  app.post('/orders/add', app.controller.orders.add);
  app.get('/orders/list', app.controller.orders.list);
  // dingTalk according
  app.get('/dingtalk/userlist', app.controller.dingtalk.userList);
};
