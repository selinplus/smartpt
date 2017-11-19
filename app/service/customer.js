/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Service = require('egg').Service;

class CustomerService extends Service {
  async list() {
    const ctx = this.ctx;
    const { limit, page } = Object.assign(this.ctx.request.query, { limit: 10, page: 1 });
    const user_id = ctx.session.user_id || this.app.config.user_id;
    const result = await this.app.mysql.select('customer', {
      where: { user_id },
      order: [ 'create_time', 'desc' ],
      limit,
      offset: limit * (page - 1),
    });
    return result;
  }
}

module.exports = CustomerService;
