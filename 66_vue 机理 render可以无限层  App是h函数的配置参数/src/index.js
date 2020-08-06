// 运行时的vue，好处是可以使用render（vue全包也可以用），render可以动态构建虚拟节点（用h函数）。
// h函数是产生虚拟节点的，render函数的返回值，就相当于给这个组件身上添加了_vnode
import Vue from 'vue';
// 是h函数的配置参数
import App from './App.vue';
console.log(App);


// new Vue 的结果就是一个组件
const vm = new Vue({
  el: '#app',
  render(h) {
    // h函数里面可以有render。render可以无限层
    /* return h({
      render(h){
        return h('h1','嘻嘻嘻')
      }
    }); */
    return h(App)
  },
});

console.log(vm);

// 暴露到全局
window.vm = vm;
