
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.session.userId = 'test1';
    this.ctx.session.username = '龙韵';
    const user = { _username: this.ctx.session.username };
    await this.ctx.render('home.njk', user);
  }
}

module.exports = HomeController;
