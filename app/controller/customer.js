const Controller = require('egg').Controller;

class CustomerController extends Controller {
  async list() {
    const { ctx, service, app } = this;
    const { limit = app.config.limit, page = 1 } = ctx.query;
    const user_id = this.ctx.session.userId;
    const result = await service.customer.list(user_id, limit, page);
    this.ctx.encapsulateQuery(result);
  }
  async add() {
    const { ctx, session, service, app } = this;
    const { user_id = app.config.user_id } = session || {};
    const body = Object.assign({ user_id }, ctx.request.body);
    const result = await service.customer.add(body);
    this.ctx.encapsulateCreate(result);
  }
  async query() {
    const { ctx, service } = this;
    const { keyword = '', userId = 'test1' } = ctx.query;
    const result = await service.customer.query(keyword, userId);
    ctx.body = result;
  }
  async timeLine() {
    const { ctx, service } = this;
    const userId = ctx.session.userId;
    const username = ctx.session.username;
    const dataset = await service.customer.timeLine(userId);
    const result = { username, dataset };
    ctx.body = result;
  }
}

module.exports = CustomerController;
