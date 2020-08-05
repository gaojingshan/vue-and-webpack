<template>
  <div>
    <!-- 作用① ： 使标签可以合理嵌套。 -->
    <ul class="box">
      <li is="Haha"></li>
      <li is="Haha"></li>
      <li is="Haha"></li>
    </ul>
  </div>
</template>

<script>
  import Haha from './components/Haha.vue';
  export default {
    components: {
      Haha
    }
  }
</script>

<style lang="less" scoped>
  .box {
    margin: 40px;
  }
</style>