const Controller = require('egg').Controller;

class DingtalkController extends Controller {
  * userList() {
    const res = yield this.app.dingtalk.user.list('40660078', true);
    const result = JSON.stringify(res);
    return this.ctx.encaptulate(result);
  }

  /**
   * 获取 js api 接入时需要的配置数据
   * @param {String} url 当前页面的地址 (注意: egg 里面是 `this.href`)
   * @param {Object} [opts] 其他参数, 包括 noncestr, timestamp
   *  前端：dd.config中还需要单独配置 agentId 和 jsApiList
   * @see https://open-doc.dingtalk.com/doc2/detail.htm?spm=a219a.7386797.0.0.WXYE3B&treeId=171&articleId=104934&docType=1
   */
  * init() { // micappliction init 区别只在变量agentId
    const url = 'http://n2qupr.natappfree.cc' + this.ctx.request.url;
    console.log('url:', url);
    const noncestr = this.app.config.dingtalk.assist_noncestr;
    const initconfig = yield this.app.dingtalk.client.getJSApiConfig(url, { noncestr });
    const agentId = this.app.config.dingtalk.agentId.assist;
    const config = Object.assign(initconfig, { agentId });
    console.log(config);
    yield this.ctx.render('dingtalk.njk', { config });
  }
  * authtalk() { // h5 ajax request
    const { ctx } = this;
    const { event, code } = ctx.request.body;
    const eventCon = event.replace('-', '/');
    const result = yield this.app.dingtalk.client.get(eventCon, { code });
    const json = JSON.stringify(result);
    console.log(json);
    ctx.body = json;
  }
  * mounted() { // h5 redirect request
    const { ctx } = this;
    const event = 'user/get';
    const { userid } = ctx.request.query;
    // 获取当前用户的详细信息
    const result = yield this.app.dingtalk.client.get(event, { userid });
    const user = yield this.app.mysql.select('dinguser', {
      where: { id: result.userid },
    });
    this.ctx.session.userId = userid;
    this.ctx.session.username = result.username;
    if (user.length > 0) {
      const row = {
        id: userid,
        name: result.name,
        mobile: result.mobile,
        active: result.active,
      };
      const data = yield this.app.mysql.update('dinguser', row);
      const success = data.affectedRows === 1;
      console.log(success);
    } else {
      const row = {
        id: userid,
        name: result.name,
        mobile: result.mobile,
        active: result.active,
      };
      const success = yield this.app.mysql.insert('dinguser', row);
      console.log(success);
    }
    this.ctx.redirect('/');
  }
}

module.exports = DingtalkController;
