export default {
  namespaced: true,
  state: {
    a: 10,
  },
  mutations: {
    // changeA(state, {a}) {
    //   state.a = a;
    // },
    changeA(state, {a}) {
      state.a = a;
    },
  },
  actions: {
    changeA({commit}, {a}) {
      console.log('传给服务器的a是' + a);

      commit('changeA', {a});
    },
  },
};
