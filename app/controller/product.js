/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    const { ctx, service } = this;
    // const { id } = ctx.request.query;
    const result = await service.product.getlist();
    ctx.body = result;
    // return result;
  }
}

module.exports = ProductController;
