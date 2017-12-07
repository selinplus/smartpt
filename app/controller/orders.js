
const Controller = require('egg').Controller;

class OrdersController extends Controller {
  async save() {
    const { ctx, service, app } = this;
    const store = ctx.request.body;
    console.log(store);
    let ccnt =0;
    let orderItemCount = 0;
    let customerId = 0;
    const user_id = ctx.session.userId;// 当前用户
    if (store.customer.id === 0) { // 新增用户,先保存用户信息
      let {id, ...customer} = store.customer;
      customer.user_id = user_id;
      ccnt = await service.customer.add(customer);
      const newCustomer = await service.customer.find(customer);
      customerId = newCustomer[0].id;
    }else{
      customerId = store.customer.id;
    }
    // 保存订单信息
    const orderId = Date.now();
    console.log('customerId:', customerId);
    const selectProduct = store.products.filter((v) => v.quantity>0);
    const orderArray = [];
    
    selectProduct.forEach(p => {// 18653591507 6208153 黄 10010 3月 360
      const {id,quantity,...rest} = p;
      const order = Object.assign({}, { user_id, order_id: orderId, product_id: id, customer_id: customerId, quantity});
      orderArray.push(order);
    });
    orderItemCount = await service.orders.save(orderArray);
    
    // 保存食用规划
    const {schedule} = store;
    for (const s of schedule){
      const {id, ...rest} = s;
      rest.product_id = id;
      rest.customer_id = customerId;
      rest.order_id = orderId;
      service.schedule.add(rest);
    }
    ctx.body = { success: orderItemCount};   
  }
  async list() {
    const { ctx, session, service, app } = this;
    const { user_id = app.config.user_id } = session || {};
    const { limit = app.config.limit, page = 1 } = ctx.query;
    const result = await service.orders.list(user_id, limit, page);
    return ctx.encapsulateQuery(result);
  }
}

module.exports = OrdersController;
