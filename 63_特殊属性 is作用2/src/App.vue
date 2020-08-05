<template>
  <div>
    <!-- 作用②：动态决定上哪个组件 -->
    <div :is="'Step' + a"></div>
    <Button @click="a--" :disabled="a==1">上一步</Button>
    <Button @click="a++" :disabled="a==3">下一步</Button>
  </div>
</template>

<script>
  import Step1 from './components/Step1.vue';
  import Step2 from './components/Step2.vue';
  import Step3 from './components/Step3.vue';
  export default {
    components: {
      Step1,
      Step2,
      Step3
    },
    data() {
      return {
        a: 1
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>