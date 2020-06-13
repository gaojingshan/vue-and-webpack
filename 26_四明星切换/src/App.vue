<template>
    <div>
        <p>
            <button v-for="(english, chinese) in obj" :key="english" @click="star = english" :class="{'cur' : star == english}">{{chinese}}</button>
        </p>
        <p>
            <button @click="idx--" :disabled="idx == 1">上一张</button>
            <img :src="`images/${star}/${idx}.jpg`" alt="">
            <button @click="idx++" :disabled="idx == 5">下一张</button>
        </p>
        <p>
            <img :class="['xt',{'cur': idx == i}]" v-for="i in 5" :key="i" :src="`images/${star}/${i}.jpg`" @mouseenter="idx = i">
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                star: 'jindong',
                idx: 2,
                obj: {
                    '关晓彤': 'guanxiaotong',
                    '易烊千玺': 'yiyangqianxi',
                    '靳东': 'jindong',
                    '杨幂': 'yangmi'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .cur {
        background-color: yellow;
    }
    .xt{
        width: 80px;
        &.cur{
            border: 2px solid red;
        }
    }
</style>