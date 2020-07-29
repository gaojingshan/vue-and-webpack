<template>
  <div>
    <h1>你要看第{{id}}号笑话</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
    };
  },
  created() {
    // this.id = this.$route.params.id;
    console.log(this.$route);

    // 解构
    const { id } = this.$route.params;
    this.id = id;
  },
};
</script>

<style lang="less" scoped>
</style>
