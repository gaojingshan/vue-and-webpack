// 运行时vue是不能使用template方法的，template到最后是vue-loader编译成h函数的
// import Vue from 'vue';
import Vue from '../node_modules/vue/dist/vue.js';

// new Vue 的结果就是一个组件
const vm = new Vue({
  data: {
    a: 1,
  },
  template:
    '<div><h1>我是组件{{a}}</h1><button @click="add">按我加1</button></div>',
  el: '#app',
  methods: {
    add() {
      this.a++;
    },
  },
});

console.log(vm);

// 暴露到全局
window.vm = vm;
