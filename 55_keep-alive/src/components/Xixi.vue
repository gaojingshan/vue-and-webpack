<template>
    <div>
        <p>我是嘻嘻组件</p>
        <h1>我能够记录滚动条位置</h1>
        <router-link to="/haha">点我到哈哈</router-link>
        <p>
            <input type="text" />
        </p>
        <div class="box" ref="box" @scroll="scrollHan">
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <p>嘻嘻嘻嘻嘻嘻嘻</p>
            <p>嘻嘻嘻嘻嘻嘻嘻</p>
            <p>嘻嘻嘻嘻嘻嘻嘻</p>
            <p>嘻嘻嘻嘻嘻嘻嘻</p>
            <p>嘻嘻嘻嘻嘻嘻嘻</p>
            <p>嘻嘻嘻嘻嘻嘻嘻</p>
            <p>嘻嘻嘻嘻嘻嘻嘻</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                scrollTop: 0,
            };
        },
        methods: {
            // 2 获取并存储当前 scrollTop
            scrollHan(e) {
                this.scrollTop = e.target.scrollTop;
            },
        },
        // 3 返回时取出并设置 scrollTop
        activated() {
            this.$refs.box.scrollTop = this.scrollTop;
        },
    };
</script>

<style lang="less" scoped>
    .box {
        width: 200px;
        height: 200px;
        overflow-y: scroll;
    }
</style>


