import * as types from '../mutations-type';

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null,
};

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
};

// actions
const actions = {
  // checkout({ commit, state }, products) {
  //   const savedCartItems = [ ...state.added ];
  //   commit(types.CHECKOUT_REQUEST);
  // shop.buyProducts(
  //   products,
  //   () => commit(types.CHECKOUT_SUCCESS),
  //   () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
  // );
  // },
};

// mutations
const mutations = {
  [types.ADD_CUSTOMER_REQUEST](state, { id }) {
    state.checkoutStatus = null;
    const record = state.added.find(p => p.id === id);
    if (!record) {
      state.added.push({
        id,
        quantity: 1,
      });
    } else {
      record.quantity++;
    }
  },

  [types.ADD_CUSTOMER_SUCCESS](state) {
    state.checkoutStatus = 'successful';
  },

  [types.ADD_CUSTOMER_FAILURE](state, { savedCartItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems;
    state.checkoutStatus = 'failed';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
