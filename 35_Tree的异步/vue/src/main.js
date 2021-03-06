import Vue from 'vue';
import vuex from 'vuex';
import iviewui from 'view-design';

import App from './App.vue';

// 引入统领store,名字叫做storeObj
import storeObj from './store/index.js';

// 使用插件，use表示“使用”，使用什么？使用插件
Vue.use(iviewui);
Vue.use(vuex);


// 创建出真正的Store，必须写在use语句之后。我们的统领store成为了参数。
const store = new vuex.Store(storeObj);

// Vue的起步语法
new Vue({
    // 挂载点，我们的index.html中，有一个空的<div id="app"></div>
    el: '#app',
    // render表示渲染，h函数表示创建节点，后面会详细介绍
    render(h) {
        return h(App);
    },
    // 挂载store
    store
});