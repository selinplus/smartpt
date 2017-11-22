/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Controller = require('egg').Controller;

class DingtalkController extends Controller {
  * userList() {
    const result = yield this.app.dingtalk.user.list('40660078', true);
    const res = JSON.stringify(result);
    this.ctx.body = res;
  }

  /**
   * 获取 js api 接入时需要的配置数据
   * @param {String} url 当前页面的地址 (注意: egg 里面是 `this.href`)
   * @param {Object} [opts] 其他参数, 包括 noncestr, timestamp
   *  前端：dd.config中还需要单独配置 agentId 和 jsApiList
   * @see https://open-doc.dingtalk.com/doc2/detail.htm?spm=a219a.7386797.0.0.WXYE3B&treeId=171&articleId=104934&docType=1
   */
  * getJsApiConfig() {
    const url = this.href;
    const noncestr = this.app.config.dingtalk.assist_noncestr;
    this.ctx.body = yield this.app.dingtalk.client.getJsApiConfig(url, { noncestr });
  }
}

module.exports = DingtalkController;
