
const BabyStore = {};
BabyStore.install = function(Vue) {
  Vue.prototype.$baby = {
    userId: 'tets info',
    customer: {},
    products: [],
    schedule: [],
  };
};

module.exports = BabyStore;
