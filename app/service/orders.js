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
  async historyStatistic(userId) {
    let result = await this.app.mysql.query('select count(1) as customerCnt from customer where user_id=?', [ userId ]);
    const customerCnt = result[0].customerCnt;
    result = await this.app.mysql.query('select count(distinct order_id) as orderCnt from orders where user_id=?', [ userId ]);
    const orderCnt = result[0].orderCnt;
    result = await this.app.mysql.query('select sum(o.quantity * p.price) as orderSum, sum(o.quantity * p.vip_price) as orderVipSum, sum(o.quantity) as productCnt  from orders o, product p where o.product_id = p.id and o.user_id =?', [userId]);
    const { orderSum, orderVipSum, productCnt } = result[0];
    const summary = { customerCnt, orderCnt, orderSum, orderVipSum, productCnt };
    return summary;
  }
  async monthStatistic(userId) {
    let result = await this.app.mysql.query('select count(1) as customerCnt from customer where create_time >= DATE_ADD(curdate(),interval -day(curdate())+1 day) and user_id=?', [ userId ]);
    const customerCnt = result[0].customerCnt;
    result = await this.app.mysql.query('select count(distinct order_id) as orderCnt from orders where create_time >= DATE_ADD(curdate(),interval -day(curdate())+1 day) and user_id=?', [ userId ]);
    const orderCnt = result[0].orderCnt;
    result = await this.app.mysql.query('select sum(o.quantity * p.price) as orderSum, sum(o.quantity * p.vip_price) as orderVipSum, sum(o.quantity) as productCnt  from orders o, product p where o.product_id = p.id and o.create_time >= DATE_ADD(curdate(),interval -day(curdate())+1 day) and o.user_id =?', [ userId ]);
    const { orderSum, orderVipSum, productCnt } = result[0];
    const summary = { customerCnt, orderCnt, orderSum, orderVipSum, productCnt };
    return summary;
  }
}

module.exports = OrdersService;
