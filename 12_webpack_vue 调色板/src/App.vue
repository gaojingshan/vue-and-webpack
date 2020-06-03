<template>
  <div>
    <div class="box" :style="{'background-color':`rgb(${r},${g},${b})`}"></div>
    <p>
      <input type="range" min="0" max="255" v-model="r">
      <input type="number" min="0" max="255" v-model="r">
    </p>
    <p>
      <input type="range" min="0" max="255" v-model="g">
      <input type="number" min="0" max="255" v-model="g">
    </p>
    <p>
      <input type="range" min="0" max="255" v-model="b">
      <input type="number" min="0" max="255" v-model="b">
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        r: 100,
        g: 100,
        b: 200
      };
    }
  };
</script>

<style lang="less" scoped>
  .box {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
  }
</style>