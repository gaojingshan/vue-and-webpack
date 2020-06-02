<template>
  <div>
    <input type="text" ref="kuang" />
    <button @click="tianjia">按我</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{index}} - {{item}}
        <button @click="del(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: [22, 33, 44, 55]
      };
    },
    methods: {
      tianjia() {
        // 得到kuang里面的东西,$refs表示选择组件中的DOM元素
        var value = this.$refs.kuang.value;
        // 小程序不能用push，必须... ，vue可以用push
        this.arr.push(value);
      },
      del(n) {
        // 小程序只能用filter，但是vue可以用splice
        this.arr.splice(n, 1);
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>