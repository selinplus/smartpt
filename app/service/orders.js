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
  async customerHistory(customerId) {
    return await this.app.mysql.query('select distinct order_id from orders where customer_id = ?', [ customerId ]);
  }
  async detailbyOrderId(orderId) {
    return await this.app.mysql.query('select a.create_time,a.order_id,a.quantity,p.name from orders a, product p where a.product_id = p.id and a.order_id=?', [ orderId ]);
  }
}

module.exports = OrdersService;
