<template>
    <div>
        <button v-for="(v,k) in info" :key="k" :class="{'cur':star == k}" @click="$emit('changeStar',{'star':k})">
            {{v}}
        </button>
    </div>
</template>

<script>
    export default {
        props: ['star', 'idx'],
        data() {
            return {
                info: {
                    'xiaozhan': '肖战',
                    'yangmi': '杨幂',
                    'xiaogou': '小狗'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .cur{
        background-color: red;
    }
</style>