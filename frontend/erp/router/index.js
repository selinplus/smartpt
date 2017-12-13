import Vue from 'vue';
import Router from 'vue-router';

import Start from 'cmp/start.vue';
import Contact from 'cmp/contact.vue';
import Vip from 'cmp/vip.vue';
import OrderInfo from 'cmp/order-info.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Start,
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip,
    },
    {
      path: '/my',
      name: 'My',
      component: OrderInfo,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }],
});
