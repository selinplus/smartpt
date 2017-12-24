import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import customer from './modules/customer';
import products from './modules/products';
import purchase from './modules/purchase';
import sales from './modules/sales';
import stock from './modules/stock';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    customer,
    products,
    purchase,
    sales,
    stock,
  },
  strict: debug,
});
