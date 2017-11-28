import Vue from 'vue';
import home from './home.vue';
import iView from 'iv/iview';
import 'iv/styles/iview.css';
import router from './router';

Vue.use(iView);

new Vue({
  router,
  render: h => h(home),
}).$mount('#main');
