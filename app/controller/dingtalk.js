/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Controller = require('egg').Controller;

class DingtalkController extends Controller {
  * userList() {
    this.ctx.body = '------:Test:';
    // const accesstoken = await this.app.dingtalk.client.getAccessToken();
    const result = yield this.app.dingtalk.user.list('40660078', true);
    // this.ctx.render('template.tpl', result);
    const res = JSON.stringify(result);
    this.ctx.body += res;
  }
}

module.exports = DingtalkController;
