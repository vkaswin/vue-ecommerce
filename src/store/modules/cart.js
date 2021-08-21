export const cart = {
  state: {
    count: 0,
    items: [],
  },
  mutations: {
    cartItems(state, payload) {
      state.items = payload;
      state.count = payload.length;
    },
  },
  actions: {
    cartItems({ commit }, payload) {
      commit("cartItems", payload);
    },
  },
};
