import Vue from 'vue';
import home from './home.vue';
import iViews from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iViews);

new Vue({
  render: h => h(home),
}).$mount('#main');
