<template>
  <div>
    <!-- v-cloak 防止我们的标签没有数据。 -->
    <div v-cloak>当没有编译完a的时候，我不会被显示{{a}}</div>

    <!-- v-once 只渲染一次，之后数据变化不会更新视图了 这可以用于优化更新性能 -->
    <div v-once>{{a}}</div>
    <Button @click="a++">按我a加1</Button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 10
      }
    },
  }
</script>

<style lang="less" scoped>
  [v-cloak] {
    display: none;
  }
</style>
