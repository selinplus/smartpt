import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import home from './home.vue';
import iView from 'iv/iview';
import 'iv/styles/iview.css';
import router from './router';
import 'assets/animate.css';
import BabyStore from './baby';
Vue.use(iView);
Vue.use(VueAxios, axios);
Vue.use(BabyStore);
new Vue({
  router,
  render: h => h(home),
  created() {
    console.log(this.$baby);
  },
}).$mount('#main');
