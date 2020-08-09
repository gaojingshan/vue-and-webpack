// import Vue from 'vue';
import Vue from '../node_modules/vue/dist/vue.js';
import App from './App.vue';
import Memeda from './components/Memeda.vue';

// Vue.use里面有个install方法，会自动调用
Vue.use({
  install(Vue) {
    Vue.component('Memeda', Memeda);
  },
});

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
});
