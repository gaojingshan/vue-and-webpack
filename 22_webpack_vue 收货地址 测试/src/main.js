import Vue from 'vue';
import iviewui from 'view-design';

import App from './App.vue';

// 使用插件，use表示“使用”。
Vue.use(iviewui);

// Vue的起步语法
new Vue({
  // 挂载点，我们的index.html中，有一个空的<div id="app"></div>
  el: '#app',
  // render表示渲染，h函数表示创建节点。
  render(h) {
    return h(App);
  },
});
