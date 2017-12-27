
const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    await this.ctx.render('erp/index.njk');
  }
}

module.exports = IndexController;
