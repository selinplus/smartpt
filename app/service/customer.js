const Service = require('egg').Service;

class CustomerService extends Service {
  async list(user_id, limit, page) {
    const result = await this.app.mysql.select('customer', {
      where: { user_id },
      order: [ 'create_time', 'desc' ],
      limit,
      offset: limit * (page - 1),
    });
    return result;
  }
  async add(customer) {
    return await this.app.mysql.insert('customer', customer);
  }
  async find(customer) {
    return await this.app.mysql.select('customer', { where: customer, orders: [[ 'id', 'desc' ]] });
  }
  async query(keyword, userId) {
    const likeword = [ '%', keyword, '%' ].join('');
    const result = await this.app.mysql.query('select id,name,mobile,address from customer where user_id= ? and CONCAT(name,mobile,address) like ?', [ userId, likeword ]);
    return result;
  }
}

module.exports = CustomerService;
