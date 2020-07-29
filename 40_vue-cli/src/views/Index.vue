<template>
  <div>
    <h1>我是首页</h1>

    <router-link :to="{'name': 'xixi'}">去嘻嘻组件</router-link>
    <br />
    <router-link :to="{'name': 'xiaohua', 'params': {'id': 45}}">去看笑话</router-link>
    <br />
    <router-link to="/xixi/45">去看45号笑话</router-link>
    <br />

    <!-- 用js跳转 -->
    <button v-for="i in 99" :key="i" @click="go(i)">按我看{{i}}号笑话</button>

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    go(n) {
      // 键名（key）不加引号的好处是可以智能感应
      this.$router.push({
        name: 'xiaohua',
        params: {
          id: n,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
