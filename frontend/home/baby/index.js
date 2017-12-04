
const BabyStore = {};
BabyStore.install = function(Vue) {
  Vue.prototype.$baby = {
    userId: 'tets info',
    summary: {},
    customer: {},
    products: [],
    schedule: [],
  };
};

module.exports = BabyStore;
