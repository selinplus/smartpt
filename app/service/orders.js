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
  async save(orderArray) {
    let cnt = 0;
    for (const o of orderArray) {
      cnt += await this.app.mysql.insert('orders', o);
    }
    return cnt;
  }
}

module.exports = OrdersService;
