<template>
    <div>
        <img v-for="i in 5" :key="i" :class="{'cur' : idx == i}" :src="`./images/${star}/${i}.jpg`" alt="" @mouseenter="$emit('changeIdx' , {'idx' : i})">
    </div>
</template>

<script>
    export default {
        props: ['star', 'idx']
    }
</script>

<style lang="less" scoped>
    img {
        width: 80px;
        height: 50px;
        &.cur {
            border: 2px solid red;
        }
    }
</style>