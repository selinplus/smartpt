import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ert from './ert.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import router from './router';
import store from './store';
Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.base,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3,
  },
});

Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: h => h(ert),
}).$mount('#main');
