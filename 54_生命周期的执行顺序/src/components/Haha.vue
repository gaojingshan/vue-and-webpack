<template>
  <div>{{a}}</div>
</template>

<script>
export default {
  props: ["a"],
  beforeUpdate() {
    console.log("我是子组件的beforeUpdate");
  },
  updated() {
    console.log("我是子组件的updated");
  },
  beforeCreate(){
    console.log('我是子组件的beforeCreate');
  },
  created(){
    console.log('我是子组件的created');
  },
  beforeMount(){
    console.log('我是子组件的beforeMount');
  },
  mounted(){
    console.log('我是子组件的mounted');
  },
};
</script>

<style lang="scss" scoped>
</style>