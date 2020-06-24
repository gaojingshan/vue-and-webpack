<template>
    <div>
        <h1>{{a}}</h1>
        <h1>{{b}}</h1>
        <h1>{{c}}</h1>
        <input type="range" min="0" max="100" v-model="a">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                a: 10,
                b: 20
            }
        },
        computed: {
            c() {
                return this.a * 2
            }
        },
        // 当a变化的时候就会做一些事情
        // 监控同名函数
        watch: {
            // v参数：a目前来说的新值
            a(v) {
                this.b = v * 2
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>