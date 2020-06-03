<template>
    <div>
        <textarea cols="30" rows="10" v-model="content"></textarea>
        <span :class="{'danger' : content.length > 140}">
            字数：{{content.length}} / 140字
        </span>
        <button :disabled="content.length > 140">发布</button>
        <button @click="content=''">清空</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .danger {
        color: red;
        font-weight: bold;
    }
</style>