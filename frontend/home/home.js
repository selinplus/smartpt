import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import home from './home.vue';
import iView from 'iv/iview';
// import 'iv/styles/iview.css';
import router from './router';
import BabyStore from './baby';
import '../theme/index.less';
Vue.use(iView);
// import { Button, Table, Collapse, Timeline, Form, Modal, Icon, Alert, Input, Card } from 'iview';
// import { Dropdown, Badge, DatePicker, InputNumber, Steps } from 'iview';
// import { Row, Col } from 'iview/src/components/grid';
// Vue.component('Button', Button);
// Vue.component('Table', Table);
// Vue.component('Collapse', Collapse);
// Vue.component('Form', Form);
// Vue.component('Timeline', Timeline);
// Vue.component('Modal', Modal);
// Vue.component('Icon', Icon);
// Vue.component('Alert', Alert);
// Vue.component('Input', Input);
// Vue.component('Card', Card);
// Vue.component('Row', Row);
// Vue.component('Col', Col);
// Vue.component('Dropdown', Dropdown);
// Vue.component('Badge', Badge);
// Vue.component('Steps', Steps);
// Vue.component('DatePicker', DatePicker);
// Vue.component('InputNumber', InputNumber);
Vue.use(VueAxios, axios);
Vue.use(BabyStore);

new Vue({
  router,
  render: h => h(home),
  created() {
    console.log(this.$baby);
  },
}).$mount('#main');
