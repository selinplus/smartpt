
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { username: _username, userId: _userId } = this.ctx.session;
    await this.ctx.render('home.njk', { _username, _userId });
  }
  async init() {
    const url = this.ctx.request.protocol + '://' + this.ctx.request.host + this.ctx.request.originalUrl;
    await this.ctx.render('init.njk', { url });
  }
}

module.exports = HomeController;
