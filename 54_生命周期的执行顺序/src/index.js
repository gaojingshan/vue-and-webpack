import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import test from './vuex/test.js';

Vue.use(Vuex);

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
  // 全局可预测状态容器，就是把数据放到全局
  store: new Vuex.Store({
    modules: {
      test,
    },
  }),
});
