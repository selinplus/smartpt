'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/product/list', app.controller.product.list);
  // app.post('/customer/add', app.controller.customer.add);
  // app.get('/custom/list', app.controller.customer.list);
  // app.post('/order/add', app.controller.order.add);

  // dingTalk according
  app.get('/dingtalk/get', app.controller.dingtalk.get);
  app.get('/dingtalk/userlist', app.controller.dingtalk.userList);
};
