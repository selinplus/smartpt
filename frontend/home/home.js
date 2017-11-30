import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import home from './home.vue';
import iView from 'iv/iview';
import 'iv/styles/iview.css';
import router from './router';
import 'assets/animate.css';
Vue.use(iView);
Vue.use(VueAxios, axios);
new Vue({
  router,
  render: h => h(home),
}).$mount('#main');
