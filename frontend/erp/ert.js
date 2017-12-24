import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ert from './ert.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router';
import store from './store';
Vue.use(Vuetify);

Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: h => h(ert),
}).$mount('#main');
