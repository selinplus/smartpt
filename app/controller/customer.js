const Controller = require('egg').Controller;

class CustomerController extends Controller {
  async list() {
    const { ctx, session, service, app } = this;
    const { user_id = app.config.user_id } = session || {};
    const { limit = app.config.limit, page = 1 } = ctx.query;
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
}

module.exports = CustomerController;
