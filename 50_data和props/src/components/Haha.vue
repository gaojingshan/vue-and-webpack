<template>
  <div>
  </div>
</template>

<script>
export default {
  props: {
    a: {
      type: Number,
      default: 0,
      required: true,
      validator: function(value) {
        return value >= 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>