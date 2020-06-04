<template>
    <div>
        <!-- changeMHan 后面不能加圆括号，加圆括号，就表示放弃那个参数了 -->
        <Test :m = "m" :n = "n" @changeM="changeMHan" />
        <Test :m = "m" :n = "n" @changeM="changeMHan" />
    </div>
</template>

<script>
    import Test from './components/Test.vue'
    export default {
        components: {
            Test
        },
        data() {
            return {
                m: 5,
                n:{
                    v:4
                }
            }
        },
        methods:{
            changeMHan({ bh }){
                this.m += bh;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>