<template>
    <div>
        <input type="text" v-model="title" @keydown.enter="okHan">
        <button @click="okHan">增加</button>
    </div>
</template>

<script>
    export default {
        props: ['arr'],
        data() {
            return {
                title: ''
            }
        },
        methods: {
            okHan() {
                this.arr.push({
                    'title': this.title,
                    'done': false
                }),
                this.title=''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>