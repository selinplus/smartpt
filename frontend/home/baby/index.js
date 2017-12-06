
const BabyStore = {};
BabyStore.install = function(Vue) {
  Vue.prototype.$baby = {
    summary: {},
    customer: {},
    products: [],
    schedule: [],
    clear() {
      this.summary = {};
      this.customer = {};
      this.products = [];
      this.schedule = [];
    },
  };
};

module.exports = BabyStore;
