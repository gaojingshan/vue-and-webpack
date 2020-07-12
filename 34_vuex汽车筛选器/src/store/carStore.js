import axios from 'axios';
export default {
  namespaced: true,
  state: {
    // 当前页码
    page: 1,
    // 数据总数
    total: 0,
    // 汽车数据
    cardata: [],
    // 当前颜色筛选
    color:['红','蓝']
  },
  // [同步的，被commit刺激的，唯一能够改变state的地方]
  mutations: {
    // 更改汽车数组
    changeCardata(state, payloads) {
      state.cardata = payloads.cardata;
    },
    // 更改数据总数
    changeTotal(state, payloads) {
      state.total = payloads.total;
    },
    // 更改页码
    changePage(state, payloads) {
      state.page = payloads.page;
    },
    // 更改颜色
    changeColor(state,payloads){
        state.color=payloads.color
    }
  },
  // [异步的，被dispatch刺激的]
  actions: {
    // 拉取数据
    loadData({state, commit}) {
      axios
        .get('http://www.aiqianduan.com:56506/cars?page=' + state.page + '&color=' + state.color.join('v')).then((data) => {
          // 上跳
          commit('changeCardata', {cardata: data.data.results});
          commit('changeTotal', {total: data.data.total});
        });
    },
    // 改变页面
    changePage({commit, dispatch}, payloads) {
      // 先要一次上跳,page就改变了
      commit('changePage', payloads);
      // 然后拉取就行了
      dispatch('loadData');
    },
    // 改变颜色
    changeColor({commit,dispatch},payloads){
        // 改变颜色，页码要归1
        commit('changePage',{page:1});
        commit('changeColor',payloads);
        dispatch('loadData')
    }
  },
};
