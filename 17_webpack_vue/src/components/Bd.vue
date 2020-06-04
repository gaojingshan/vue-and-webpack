<template>
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <div class="box">
                    <input type="checkbox" v-model="item.done">
                </div>
                <div class="box">
                    <!-- {{item.title}} -->
                    <Item :item="item" />
                </div>
                <!-- 删除按钮最好写在父组件里面，因为子组件掌握不到数组全貌，删不掉 -->
                <button @click="arr.splice(index, 1)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import Item from './Item.vue';
    export default {
        props: ['arr'],
        components: {
            Item
        }
    }
</script>

<style lang="less" scoped>
    li {
        overflow: hidden;
        line-height: 30px;
    }
    .box {
        float: left;
    }
    button {
        float: left;
    }
</style>