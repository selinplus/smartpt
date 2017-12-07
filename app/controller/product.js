
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
    const his = await service.product.history(customerId);
    console.log(his);
    ctx.body = his;
  }
}

module.exports = ProductController;
