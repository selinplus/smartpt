import * as types from './mutations-type';

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_PRODUCT_REQUEST, {
      id: product.id,
    });
  }
};
