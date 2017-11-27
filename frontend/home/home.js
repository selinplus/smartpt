import Vue from 'vue';
import home from './home.vue';
import iView from 'iv/iview';
import 'iv/styles/iview.css';


Vue.use(iView);

new Vue({
  render: h => h(home),
}).$mount('#main');
