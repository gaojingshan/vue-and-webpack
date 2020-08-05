<template>
  <div>
    <!-- 1 给 router-view 添加 keep-alive -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <router-link to="/xixi">
      <h1>点我到嘻嘻</h1>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>