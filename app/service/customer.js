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
    // const likeword = [ '%', keyword, '%' ].join('');
    const result = await this.app.mysql.query('select id,name,mobile,address,create_time from customer where user_id= ?', [ userId ]);
    return result;
  }
  async timeLine(userId) {
    const customerList = await this.query('', userId);
    for (const c of customerList) {
      const begin = { createTime: c.create_time, desc: '加入平台' };// 起始点
      const orderHistory = this.service.orders.customerHistory(c.customer_id);// 通过用户ID获取订单ID
      const timeArray = [];
      const time = [];
      for (const order of orderHistory) { // 遍历订单
        const orderArray = [];
        const orderProduct = await this.service.orders.detailbyOrderId(order.order_id);
        if (orderProduct) {
          const createTime = orderProduct[0].create_time;
          time.push(createTime);
          for (const so of orderProduct) {
            const { name, quantity } = so;
            orderArray.push([ '产品', name, '数量', quantity ].join(' '));
          }
        }
        const create_time = orderProduct[0].create_time;
      }
    }
    const result = {};
    result.start = customer;
  }
}

module.exports = CustomerService;
