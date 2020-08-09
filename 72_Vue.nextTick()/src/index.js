// import Vue from 'vue';
import Vue from '../node_modules/vue/dist/vue.js';
import App from './App.vue';

// 混入,影响注册之后所有创建的每个 Vue 实例
Vue.mixin({
  created() {
    alert('123456');
  },
});

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
});
