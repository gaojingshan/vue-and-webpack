<template>
  <div>
    <input type="range" v-model="mya" />
  </div>
</template>

<script>
export default {
  props: ["a"],
  computed: {
    mya: {
      get() {
        return this.a;
      },
      set(v) {
        this.$emit("changeA", v);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>