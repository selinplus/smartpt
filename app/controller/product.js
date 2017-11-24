/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    const { ctx, service } = this;
    const res = await service.product.list();
    const result = await ctx.helper.nameToText(result);
    return ctx.encaptulateQuery(result);
  }
}

module.exports = ProductController;
