import axios from 'axios';
export default {
  namespaced: true,
  state: {
    allbs: [],
    brands: [],
  },
  // 同步的，被commit刺激的，唯一能够改变state的地方
  mutations: {
    changeAllbs(state, payloads) {
      state.allbs = payloads.allbs;
    },
  },
  // 异步的，被dispatch刺激的
  actions: {
    loadAllbs({commit}) {
      axios.get('http://www.aiqianduan.com:56506/allbs').then((data) => {
        commit('changeAllbs', {allbs: data.data});
      });
    },
    
  },
};
