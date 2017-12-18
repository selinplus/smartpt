const Controller = require('egg').Controller;

class CustomerController extends Controller {
  async list() {
    this.ctx.body = [];
  }
}

module.exports = CustomerController;
