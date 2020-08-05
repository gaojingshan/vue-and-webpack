<template>
    <div>
      <Haha>
        <template v-slot:toubu>
          <h1>我是头部</h1>
        </template>
        <template v-slot:shenti>
          <h1>我是身体</h1>
        </template>
        <template v-slot:weibu>
          <h1>我是尾部</h1>
        </template>
      </Haha>
    </div>
</template>

<script>
import Haha from './components/Haha.vue';
    export default {
        components:{
          Haha
        },
    }
</script>

<style lang="scss" scoped>

</style>