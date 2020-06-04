<template>
    <div>
        <h1>我是一个Test组件,我自己的a是{{a}}，我收到的m是{{m}}，我收到的n是{{n}}</h1>
        <button @click="a++">按我加1</button>
        <button @click="changeM">按我把收到的m值加4</button>
         <button @click="n.v++">按我把收到的n值加1</button>
    </div>
</template>

<script>
    export default {
        props: ['m','n'],
        data() {
            return {
                a: 10
            }
        },
        methods: {
            changeM() {
                this.$emit('changeM', {
                    bh: 4
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>