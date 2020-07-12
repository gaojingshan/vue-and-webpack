<template>
  <div>
    <h1>你好，我是Vue，全局的a是{{$store.state.counterStore.a}}</h1>
    <!-- $store 仓库 , commit发出修改数据的命令 , counterStore命名空间 , add具体的命令 -->
    <!-- 唯一能够改变全局state的方式就是发出一个commit，然后在mutations中更改全局state -->
    <!-- 里面有{'n': 1}这样的对象，它们就是“载荷” -->
    <Button type="primary" @click="$store.commit('counterStore/add', {'n' : 1})">按我加1</Button>
    <Button type="primary" @click="$store.commit('counterStore/add', {'n' : 2})">按我加2</Button>
    <Button type="primary" @click="$store.commit('counterStore/add', {'n' : 3})">按我加3</Button>
    <Button type="primary" @click="$store.commit('counterStore/minus')">按我减1</Button>
    <!-- 异步更新数据 -->
    <!-- 如果更改全局数据的请求，是异步的，那么不能使用commit，而必须使用dispatch -->
    <!-- dispatch 派遣 -->
    <Button type="primary" @click="$store.dispatch('counterStore/add', {'n' : 1})">按我2秒后加1</Button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>