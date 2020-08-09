// import Vue from 'vue';
import Vue from '../node_modules/vue/dist/vue.js';

// Vue.extend创建继承vue的类
// ve可以当vue的实例了
var ve = Vue.extend({
  data() {
    return {
      a: 10,
    };
  },
});

// console.dir 可以把对象完整展开
// console.dir(ve);

// 那么它就能够扮演Vue类的角色，可以直接new
new ve({
  // data: {
  //   a: 10,
  // },
  template: '<div>{{a}}</div>',
  el: '#app',
});
