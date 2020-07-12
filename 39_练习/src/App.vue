<template>
  <div>
    <h1>你好，我是Vue，全局的a是{{$store.state.counterStore.a}}</h1>
    <Button type="primary" @click="$store.commit('counterStore/add',{'n':1})">按我加1</Button>
    <Button type="primary" @click="$store.commit('counterStore/add',{'n':2})">按我加2</Button>
    <Button type="primary" @click="$store.commit('counterStore/add',{'n':3})">按我加3</Button>
    <Button type="primary" @click="$store.commit('counterStore/minus')">按我减1</Button>
    <Button type="primary" @click="$store.dispatch('counterStore/add',{'n':1})">按我2秒后加1</Button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>