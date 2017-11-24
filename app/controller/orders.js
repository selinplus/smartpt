/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Controller = require('egg').Controller;

class OrdersController extends Controller {
  async add() {
    const { ctx, session, service, app } = this;
    const { user_id = app.config.user_id } = session;
    const body = Object.assign({ user_id }, ctx.request.body);
    const resultCustomer = await service.customer.add(body);
    const resultOrders = await service.orders.add(body);
    return ctx.encapsulateCreate((resultCustomer + resultOrders)/2)
   
  }
  async list() {
    const { ctx, session, service, app } = this;
    const { user_id = app.config.user_id } = session || {};
    const { limit = app.config.limit, page = 1 } = ctx.query;
    const result = await service.orders.list(user_id, limit, page);
    return ctx.encapsulateQuery(result);
  }
}

module.exports = OrdersController;
