<template>
  <div>
    <!-- <button @click="$store.commit('test/changeA',{a:8})">按我a变为8</button> -->

    {{mya}}
    <input type="range" v-model="mya" />
  </div>
</template>

<script>
export default {
  computed: {
    mya: {
      get() {
        return this.$store.state.test.a;
      },
      set(a) {
        this.$store.dispatch("test/changeA", { a });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>