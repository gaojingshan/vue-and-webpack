<template>
  <div id="app">
    <!-- 小电视，呈递动态路由放的容器 所有被路由匹配的盒子、界面、组件都会被放到这个页面上去。匹配的元素会放到这个里面-->
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
