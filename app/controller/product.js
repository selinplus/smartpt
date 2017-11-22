/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    const { ctx, service } = this;
    const result = await service.product.list();
    const ire = ctx.helper.nameToText(result);
    this.ctx.body = await ctx.render('template', ire);
  }
}

module.exports = ProductController;
