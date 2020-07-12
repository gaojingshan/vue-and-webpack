import axios from 'axios';
export default {
  namespaced: true,
  state: {
    // 总数据
    cardata: [],
    // 总条数
    total: 0,
    // 页码
    page: 1,
    // 选中的颜色
    color: ['红', '蓝'],
    brand: '',
  },
  mutations: {
    cardata(state, payloads) {
      state.cardata = payloads.cardata;
    },
    total(state, payloads) {
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
          commit('cardata', {cardata: data.data.results});
          commit('total', {total: data.data.total});
        });
    },
    changePage({commit, dispatch}, payloads) {
      commit('changePage', payloads);
      dispatch('loadData');
    },
    changeColor({commit, dispatch}, payloads) {
      commit('changePage', {page: 1});
      commit('changeColor', payloads);
      dispatch('loadData');
    },
    changeBrand({commit, dispatch}, payloads) {
      commit('changePage', {page: 1});
      commit('changeBrand', payloads);
      dispatch('loadData')
    },
  },
};
