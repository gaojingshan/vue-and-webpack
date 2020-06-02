<template>
  <div>
    <input type="text" v-model="a" />
    <h1>{{a}}</h1>
    <button @click="a++">按我加1</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 11
      };
    },
  };
</script>

<style lang="less" scoped>

</style>