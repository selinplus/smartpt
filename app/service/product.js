const Service = require('egg').Service;

class ProductService extends Service {
  async list() {
    return await this.app.mysql.select('product', {
      orders: [ 'id' ],
    });
  }
  async history(id) {
    return await this.app.mysql.query('select distinct p.name from orders o, product p where o.product_id = p.id and o.customer_id = ?', [ id ]);
  }
}

module.exports = ProductService;
