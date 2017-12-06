
const Controller = require('egg').Controller;

class OrdersController extends Controller {
  async save() {
    const { ctx, session, service, app } = this;
    const { userId = app.config.user_id } = session;
    const store = ctx.request.body;
    let ccnt =0;
    let customerId = 0;
    if (store.customer.id === 0) { // 新增用户
      let {id, ...customer} = store.customer;
      customer.userId = session.userId;
      console.log(customer);
      ccnt = await service.customer.add(customer);
      const newCustomer = await service.find(customer);
      customerId = newCustomer.id;
    }
    if(true){
      const selectProduct = store.products.filter((v) => v.quantity>0);
      const orderArray = [];
      const orderId = Date.now();
      let productInfo = selectProduct.forEach(p => {// 18653591507 6208153 黄 10010 3月 360
        const {id,quantity,...rest} = p;
        order = Object.assign({}, { order_id:orderId,product_id:id})
        order.product_id = id;
      });
    }
    ctx.body = { success: 1 };
    console.log(ctx.body);
    // const body = Object.assign({ user_id }, ctx.request.body);
    // const resultCustomer = await service.customer.add(body);
    // const resultOrders = await service.orders.add(body);
    // return ctx.encapsulateCreate((resultCustomer + resultOrders) / 2);
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
