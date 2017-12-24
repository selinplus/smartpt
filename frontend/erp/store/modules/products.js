import * as types from '../mutation-types';

// initial state
const state = {
  all: [],
  snackbarMsg: '',
};

// getters
const getters = {
  allProducts: state => state.all,
};

// actions
const actions = {
  getAllProducts({ commit, rootState }) {
    this.axios.get('/erp/product/list', {
      params: {
        userId: rootState.userId,
        userDeptId: rootState.userDeptId,
      },
    }).then(products => {
      commit(types.RECEIVE_PRODUCTS_SUCCESS, { products });
    }).catch(error => {
      commit(types.RECEIVE_PRODUCTS_FAILURE, { error });
    });
  },
  removeProduct({ commit, rootState }, id) {
    this.axios.get('/erp/product/remove', {
      userId: rootState.useId,
      userDeptId: rootState.userDeptId,
      id,
    }).then(() => {
      commit(types.REMOVE_PRODUCTS_SUCCESS, { id });
    }).catch(error => {
      commit(types.REMOVE_PRODUCTS_FAILURE, { error });
    });
  },
};

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS_SUCCESS](state, { products }) {
    state.all = products;
  },
  [types.RECEIVE_PRODUCTS_FAILURE](state, { error }) {
    state.all = [];
    state.snackbarMsg = error;
  },
  [types.ADD_PRODUCTS_SUCCESS](state, { id }) {
    state.all.find(p => p.id === id).inventory--;
  },
  [types.REMOVE_PRODUCTS_SUCCESS](state, { id }) {
    state.all.slice(state.all.findIndex(p => p.id === id), 1);
  },
  [types.REMOVE_PRODUCTS_FAILURE](state, { error }) {
    state.snackbarMsg = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
