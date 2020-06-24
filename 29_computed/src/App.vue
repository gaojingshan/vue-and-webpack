<template>
    <div>
        <p>{{a}}</p>
        <p>{{m}}</p>
        <!-- 哲学上computed仅能够根据data值的不同，变化不同的值。data就好比它的参数。 -->
        <!-- m是a计算后的值，a改变，m保持等式也会改变。但是不能手动去改变m的值 -->
        <button @click="a++">a加1</button>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                a: 10
            }
        },
        computed: {
            m() {
                return this.a * 2
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>