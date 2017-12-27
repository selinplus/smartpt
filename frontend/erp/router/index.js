import Vue from 'vue';
import Router from 'vue-router';

import Sales from 'front/erp/erppage/sales.vue';
import Company from 'front/erp/erppage/company.vue';
import Purchase from 'front/erp/erppage/purchase.vue';
import Stock from 'front/erp/erppage/stock.vue';
import Product from 'front/erp/erppage/product.vue';
import Home from 'front/erp/erppage/index.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/sales',
      name: 'Sales',
      component: Sales,
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
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
      path: '/company',
      name: 'Company',
      component: Company,
    }],
});
