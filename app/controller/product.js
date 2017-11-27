
const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    const { ctx, service } = this;
    const res = await service.product.list();
    const result = await ctx.helper.nameToText(res);
    return ctx.encaptulateQuery(result);
  }
  async query() {
    const { ctx, service } = this;
    const { keyword = '' } = ctx.query;
    const result = await service.product.query(keyword);
    console.log('------------------');
    console.log(result);
    console.log('-------------------');
    ctx.body = result;
  }
}

module.exports = ProductController;
