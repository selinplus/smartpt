
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const _username = this.ctx.session.username;
    const _userId = this.ctx.session.userId;
    console.log(_userId);
    await this.ctx.render('home.njk', { _username, _userId });
  }
  async init() {
    const url = this.ctx.request.protocol + '://' + this.ctx.request.host + this.ctx.request.originalUrl;
    await this.ctx.render('init.njk', { url });
  }
}

module.exports = HomeController;
