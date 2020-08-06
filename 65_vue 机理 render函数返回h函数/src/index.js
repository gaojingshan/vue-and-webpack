// 运行时的vue，好处是可以使用render（vue全包也可以用），render可以动态构建虚拟节点（用h函数）。
// h函数是产生虚拟节点的，render函数的返回值，就相当于给这个组件身上添加了_vnode
import Vue from 'vue';

// new Vue 的结果就是一个组件
const vm = new Vue({
  data: {
    a: 1,
  },
  el: '#app',
  render(h) {
    return h('div', [
      h('h1', '你好我是组件' + this.a),
      h(
        'button',
        {
          on: {
            click: () => {
              this.a++;
            },
          },
        },
        '按我加1'
      ),
    ]);
  },
});

console.log(vm);

// 暴露到全局
window.vm = vm;
