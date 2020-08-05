<template>
  <div>
    <!-- 字符串或者变量，二者无差别。 -->
    <div v-text="'哈哈'"></div>
    <div v-html="'哈哈'"></div>

    <div v-text="a"></div>
    <div v-html="a"></div>

    <!-- v-html注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译。 -->
    <div v-text="'<i>哈哈</i>'">哈哈</div>
    <div v-html="'<i>哈哈</i>'">哈哈</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 10,
      };
    },
  };
</script>

<style lang="scss" scoped>

</style>