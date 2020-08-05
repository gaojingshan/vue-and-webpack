<template>
  <div>
    {{a}}
    <!-- v-model 随表单控件类型不同而不同。 -->
    <input type="text" v-model.lazy="a">
    <input type="text" v-model.lazy.number.trim="a">
    <!-- v-pre -->
    <div v-pre>
      {{a}}
    </div>
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

<style lang="scss" scoped>

</style>