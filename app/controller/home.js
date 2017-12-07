
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.session.userId = 'test1';
    this.ctx.session.username = '龙韵';
    await this.ctx.render('home.njk');
  }
}

module.exports = HomeController;
