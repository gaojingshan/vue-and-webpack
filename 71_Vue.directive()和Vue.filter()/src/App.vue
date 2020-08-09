<template>
  <div>
    <!-- 加个自定义聚焦指令 -->
    <input type="text" />
    <input type="text" v-jujiao />
    <!-- 过滤器 -->
    <h1>{{1234 | daxie}}</h1>
    <h1>{{a | sishewuru |daxie}}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 10.87
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>