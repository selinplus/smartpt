/* eslint linebreak-style: ["error", "windows"]*/
'use strict';

const Service = require('egg').Service;

class ProductService extends Service {
  async getlist() {
    const result = this.app.mysql.get('product', 1);
    return result;
  }
}

module.exports = ProductService;
