<template>
    <div>
        <button :class="{'cur' : chu == '石头'}" @click="chu = '石头'">石头</button>
        <button :class="{'cur' : chu == '剪刀'}" @click="chu = '剪刀'">剪刀</button>
        <button :class="{'cur' : chu == '布'}" @click="chu = '布'">布</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chu: '石头'
            }
        }
    }
</script>

<style lang="less" scoped>
    .cur {
        background: orange;
    }
</style>