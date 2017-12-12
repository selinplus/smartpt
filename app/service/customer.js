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
  async query(userId) {
    // const likeword = [ '%', keyword, '%' ].join('');
    const result = await this.app.mysql.query('select id,name,mobile,address,create_time from customer where user_id= ?', [ userId ]);
    return result;
  }
  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
  async timeLine(userId) { // 顾客时间线核心函数
    const result = [];
    const customerList = await this.query(userId);
    for (const customer of customerList) {
      const nodes = [];
      const node = { timer: '', desc: '' };
      node.timer = customer.create_time.toLocaleString();
      node.desc = [ '加入平台' ];
      nodes.push(node);
      const orderHistory = await this.service.orders.customerHistory(customer.id);// 通过用户ID获取订单ID
      for (const order of orderHistory) { // 遍历订单
        const node = { timer: '', desc: '' };
        const orderArray = [];
        const orderProduct = await this.service.orders.detailbyOrderId(order.order_id);
        if (orderProduct) {
          const createTime = orderProduct[0].create_time;
          for (const so of orderProduct) {
            const { name, quantity } = so;
            orderArray.push([ name, '数量', quantity ].join(' '));
          }
          node.timer = createTime.toLocaleString();
          node.desc = orderArray;
          node.key = this.guid();
          nodes.push(node);
        }
      }
      customer.nodes = nodes;
      customer.key = this.guid();
      result.push(customer);
    }
    return result;
  }
  async month(userId) {
    const result = this.app.mysql.query('select name,address,mobile,create_time from customer where create_time >= DATE_ADD(curdate(),interval -day(curdate())+1 day) and user_id=?', [ userId ]);
    return result;
  }
}

module.exports = CustomerService;
