import Vue from 'vue';
import iviewui from 'view-design';
import App from './App.vue';

Vue.use(iviewui);

new Vue({
  el: '#app',
  render(h) {
    return h(App);
  },
});
