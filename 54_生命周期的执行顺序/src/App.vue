<template>
  <div>
      <Haha :a="a" />
      <button @click="a++">按我加1</button>
  </div>
</template>

<script>
import Haha from "./components/Haha.vue";
export default {
  data() {
    return {
      a: 10
    };
  },
  components:{
      Haha
  },
  beforeUpdate(){
    console.log('我是父组件的beforeUpdate');
  },
  updated(){
    console.log('我是父组件的updated');
  },
  beforeCreate(){
    console.log('我是父组件的beforeCreate');
  },
  created(){
    console.log('我是父组件的created');
  },
  beforeMount(){
    console.log('我是父组件的beforeMount');
  },
  mounted(){
    console.log('我是父组件的mounted');
  },
};
</script>

<style lang="scss" scoped>
</style>