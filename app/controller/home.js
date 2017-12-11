
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const _username = this.ctx.session.username;
    const _userId = this.ctx.session.userId;
    console.log(_userId);
    await this.ctx.render('home.njk', { _username, _userId });
  }
}

module.exports = HomeController;
