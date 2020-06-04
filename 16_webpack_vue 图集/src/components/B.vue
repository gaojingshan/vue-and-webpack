<template>
    <div class="w">
        <button class="btn" @click="$emit('goPrev')" :disabled="idx == 1">上一张</button>
        <div class="box" :style="{'background-image':`url(/images/${star}/${idx}.jpg)`}"></div>
        <button class="btn" @click="$emit('goNext')" :disabled="idx == 5">下一张</button>
    </div>
</template>

<script>
    export default {
        props: ['star', 'idx']
    }
</script>

<style lang="less" scoped>
.w{
    overflow: hidden;
    margin-top: 20px;
}
    .btn {
        float: left;
    }
    .box {
        float: left;
        width: 300px;
        height: 300px;
        background-size: cover;
        background-position: center center;
    }
</style>