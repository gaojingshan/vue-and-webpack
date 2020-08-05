import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './App.vue';
import test from './vuex/test.js';

Vue.use(Vuex);
Vue.use(VueRouter);

// 路由表
const routes = [
  { path: '/haha', component: () => import('./components/Haha.vue') },
  { path: '/xixi', component: () => import('./components/Xixi.vue') }
]
const router = new VueRouter({
  routes
})

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
  router
});
