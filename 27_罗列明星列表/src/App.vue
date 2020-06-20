<template>
    <div>
        <div class="box" v-for="item in arr" :key="item.name">
            <div class="left">
                <img :src="`http://www.aiqianduan.com:56506/images/mingxing/${item.pic}`" alt="">
            </div>
            <div class="right">
                <h3>{{item.name}}</h3>
                <p>代表作：</p>
                <ul>
                    <li v-for="_item in item.works" :key="_item">{{_item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                arr: []
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/mingxing').then(data => {
                console.log(data.data);
                this.arr = data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .box {
        width: 800px;
        margin: 50px auto;
        border: 1px solid #000;
        margin-bottom: 10px;
        overflow: hidden;
        .left {
            float: left;
            width: 200px;
            margin-right: 10px;
            img{
                width: 200px;
            }
        }
        .right {
            float: left;
            width: 500px;
        }
    }
</style>