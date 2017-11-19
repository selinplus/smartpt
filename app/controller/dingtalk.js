/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Controller = require('egg').Controller;

class DingtalkController extends Controller {
  async get() {
    this.ctx.body = ' 李金光向张静致敬';
  }
  async userList() {
    this.ctx.body = '------:Test:';
    // const accesstoken = await this.app.dingtalk.client.getAccessToken();
    const result = await this.app.dingtalk.user.list('40660078', true);
    // this.ctx.render('template.tpl', result);
    this.ctx.body += result;
  }
}

module.exports = DingtalkController;
