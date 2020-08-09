// import Vue from 'vue';
import Vue from '../node_modules/vue/dist/vue.js';
import App from './App.vue';
import rmbx from 'rmb-x';

// directive 自定义指令
Vue.directive('jujiao', {
  // 当被绑定的元素插入到DOM中时
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  },
});

// 自定义过滤器，有的时候需要引包
Vue.filter('daxie', (value) => {
  return rmbx(value);
});
Vue.filter('sishewuru', (value) => {
  return Math.round(value);
});

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
});
