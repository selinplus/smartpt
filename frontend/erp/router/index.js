import Vue from 'vue';
import Router from 'vue-router';

import Sales from 'front/erp/erppage/sales.vue';
import Contact from 'front/erp/erppage/contact.vue';
import Purchase from 'front/erp/erppage/purchase.vue';
import Stock from 'front/erp/erppage/stock.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/sales',
      name: 'Sales',
      component: Sales,
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase,
    },
    {
      path: '/stock',
      name: 'Stock',
      component: Stock,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }],
});
