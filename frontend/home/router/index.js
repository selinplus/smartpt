import Vue from 'vue';
import Router from 'vue-router';

import Start from 'cmp/start.vue';
import Contact from 'cmp/contact.vue';
import OrderInfo from 'cmp/order-info.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Start,
    },
    {
      path: '/Order',
      name: 'Order',
      component: OrderInfo,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }],
});
