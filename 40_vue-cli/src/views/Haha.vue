<template>
  <div>
    <h1>我是哈哈组件</h1>
    <router-view />
  </div>
</template>

<script>
import http from '../http/http';

export default {
  created() {
    // http需要自己封装一个
    // 这里需要调函数，需要http统领壳
    // 函数名  回调
    http.get('getNews', (data) => {
      console.log(data.data);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
