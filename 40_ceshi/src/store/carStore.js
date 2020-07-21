import axios from 'axios';
export default {
  namespaced: true,
  state: {
    allbs: [],
  },
  mutations: {
    loadData(state, payloads) {
      state.allbs = payloads.allbs;
    },
  },
  actions: {
    loadData({commit}) {
      axios.get('http://www.aiqianduan.com:56506/allbs').then((data) => {
        commit('loadData', {allbs: data.data});
      });
    },
  },
};
