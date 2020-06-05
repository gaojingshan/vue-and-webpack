<template>
    <div>
        <!-- 这个组件，用来统计做了多少没做多少 -->
        <!-- 调用computed的时候，不能加圆括号 -->
        <h1>亲爱的用户，你已经做完{{zuowandegeshu}}，没有做{{meizuowandegeshu}}</h1>
    </div>
</template>

<script>
    export default {
        props: ['arr'],
        // 统计
        computed: {
            // 定义computed，实际上是定义函数
            // 什么时候用computed,如果我们要根据props或者data进行一些相关计算，那么就要写在computed中。
            // 注意，computed中要定义函数，但是使用的时候，不能加圆括号。所以也不能接受参数
            zuowandegeshu() {
                return this.arr.filter(item => item.done).length
            },
            meizuowandegeshu() {
                return this.arr.filter(item => !item.done).length
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>