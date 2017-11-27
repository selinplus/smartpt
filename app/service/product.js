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
  async query(keyword) {
    const likeword = [ '%', keyword, '%' ].join('');
    const result = await this.app.mysql.query('select id,name,mobile,address from customer where CONCAT(name,mobile,address) like ?', [ likeword ]);
    return result;
  }
}

module.exports = ProductService;
