import Vue from 'vue';
import App from './App.vue';

// Vue要运行必须被new
new Vue({
    // el表示运行挂载点，是element launch的意思
    el:'#app',
    // 显示，系统赠送h参数，h是一个函数
    render(h){
        // h是创建节点的函数
        return h(App)
    }
})

