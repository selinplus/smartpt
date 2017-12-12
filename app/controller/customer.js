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
    const { ctx, service } = this;
    const user_id = this.ctx.session.userId;
    const body = Object.assign({ user_id }, ctx.request.body);
    const result = await service.customer.add(body);
    this.ctx.encapsulateCreate(result);
  }
  async query() {
    const { ctx, service } = this;
    const userId = ctx.session.userId;
    const result = await service.customer.query(userId);
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
  async month() {
    const { ctx, service } = this;
    const userId = ctx.session.userId;
    const result = await service.customer.month(userId);
    result.forEach(v => { v.create_time = v.create_time.toLocaleString(); });
    ctx.body = result;
  }
}

module.exports = CustomerController;
