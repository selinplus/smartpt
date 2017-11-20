/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Service = require('egg').Service;

class ProductService extends Service {
  async list() {
    const result = await this.app.mysql.select('product', {
      orders: [ 'id' ],
      limit: 10,
      offset: 0,
    });
    return result;
  }
}

module.exports = ProductService;
