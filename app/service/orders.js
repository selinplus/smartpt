const Service = require('egg').Service;

class OrdersService extends Service {
  async list(user_id, limit, page) {
    const result = await this.app.mysql.select('orders', {
      where: { user_id },
      order: [ 'create_time', 'desc' ],
      limit,
      offset: limit * (page - 1),
    });
    return result;
  }
  async add(body) {
    const result = await this.app.mysql.insert('customer', body);
    return { success: result.affectedRows === 1 };
  }
}

module.exports = OrdersService;
