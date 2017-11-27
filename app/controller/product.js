
const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    const { ctx, service } = this;
    const result = await service.product.list();
    ctx.body = result;
  }
}

module.exports = ProductController;
