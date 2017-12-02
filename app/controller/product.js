
const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    const { ctx, service } = this;
    const result = await service.product.list();
    ctx.body = result;
  }
  async history() {
    const { ctx, service } = this;
    const { customerId } = ctx.query;
    ctx.body = await service.product.history(customerId);
  }
}

module.exports = ProductController;
