<template>
  <div>
    <h1>{{a}}</h1>
    <button @click="a++">按我加1</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        a:10
      }
    },
    watch:{
      a(){
        // 这里早一些
        // nextTick需要加$，全局不需要加
        this.$nextTick(()=>{
          // 这里晚一些
          // 这时候a已经引发DOM更新了，然后执行的回调
          // DOM更新了
          console.log(1);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>