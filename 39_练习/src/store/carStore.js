import axios from 'axios';
export default {
  namespaced: true,
  state: {
    cardata: [],
    total: 0,
    page: 1,
    color: ['黄', '红'],
    brand: '',
  },
  mutations: {
    // 改变数据
    changeCardata(state, payloads) {
      state.cardata = payloads.cardata;
    },
    // 条数
    changeTotal(state, payloads) {
      state.total = payloads.total;
    },
    // 改变页码
    changePage(state, payloads) {
      state.page = payloads.page;
    },
    // 改变颜色
    changeColor(state, payloads) {
      state.color = payloads.color;
    },
    // 改变品牌
    changeBrand(state, payloads) {
      state.brand = payloads.brand;
    },
  },
  actions: {
    // 加载数据
    loadData({state, commit}) {
      axios
        .get(
          'http://www.aiqianduan.com:56506/cars?page=' +
            state.page +
            '&color=' +
            state.color.join('v')+'&brand='+state.brand
        )
        .then((data) => {
          commit('changeCardata', {cardata: data.data.results});
          commit('changeTotal', {total: data.data.total});
        });
    },
    // 改变页码
    changePage({commit, dispatch}, payloads) {
      commit('changePage', payloads);
      dispatch('loadData');
    },
    // 改变颜色
    changeColor({commit, dispatch}, payloads) {
      commit('changeColor', payloads);
      commit('changePage', {page: 1});
      dispatch('loadData');
    },
    changeBrand({commit, dispatch}, payloads) {
      commit('changeBrand', payloads);
      commit('changePage', {page: 1});
      dispatch('loadData');
    },
  },
};
