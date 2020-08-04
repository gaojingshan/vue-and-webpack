<template>
  <div>
    <h1>{{a}}</h1>
    <h1>{{b}}</h1>

    <Haha :a="a" @changeA="a=$event" />
    
  </div>
</template>

<script>
import Haha from "./components/Haha.vue";
export default {
  data() {
    return {
      a: 11
    };
  },
  computed: {
    b() {
      return this.a * 2;
    }
  },
  components: {
    Haha
  }
};
</script>

<style lang="scss" scoped>
</style>