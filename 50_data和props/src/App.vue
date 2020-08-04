<template>
  <div>
    {{a}}
    <Haha :a="a" />
  </div>
</template>

<script>
import Haha from "./components/Haha.vue";
export default {
  data() {
    return {
      a: 12
    };
  },
  components: {
    Haha
  }
};
</script>

<style lang="less" scoped>
</style>