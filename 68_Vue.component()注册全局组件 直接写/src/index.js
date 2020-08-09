// import Vue from 'vue';
import Vue from '../node_modules/vue/dist/vue.js';
import App from './App.vue';

// 注册全局组件，这样天下无人不识君了。
// 全局组件component准备开始
// Vue.component后面可以写任何vue组件类的实例的写法
Vue.component('Haha', {
  template: '<div>我是哈哈哈</div>',
});
new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
});
