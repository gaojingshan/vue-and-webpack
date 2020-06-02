// 快捷键vbase
<template>
  <div>
    <h1>你好我是Vue,很高兴遇见你！</h1>
    <h1>{{a}}</h1>
    <button @click="add(1)">按我加1</button>
    <button @click="add(2)">按我加2</button>
    <button @click="add(3)">按我加3</button>
    <p>
      <button @click="goPrev" :disabled="b == 1">上一张</button>
      <button @click="goNext" :disabled="b == 4">下一张</button>
    </p>
    <p>
      <img :src="`images/ym${b}.jpg`" alt />
      <img :src="'images/ym' + b + '.jpg'" alt />
    </p>
  </div>
</template>

<script>
export default {
  // data表示数据，它是一个函数，返回一个对象
  // 可以用快捷键vdata快速展开
  data() {
    return {
      a: 0,
      b: 1
    };
  },
  // methods表示定义方法
  methods: {
    add(n) {
      // 注意：这里不需要this.setData()了，因为Vue是变量劫持的机理，直接改变a即可。注意，不是this.data.a++，而是直接this.a++即可。
      this.a += n;
    },
    goNext() {
      this.b++;
    },
    goPrev() {
      this.b--;
    }
  }
};
</script>

<style lang="less" scoped>
h1 {
  color: #333;
}
img {
  width: 200px;
}
</style>

