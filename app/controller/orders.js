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
    return resultCustomer === 1 && resultOrders === 1;
  }
  async list() {
    const { ctx, session, service, app } = this;
    const { user_id = app.config.user_id } = session || {};
    const { limit = app.config.limit, page = 1 } = ctx.query;
    const result = await service.orders.list(user_id, limit, page);
    ctx.body = result;
  }
}

module.exports = OrdersController;
