<template>
    <div>
        <p>
            <label v-for="(item, index) in types" :key="index">
                <input type="radio" :value="item" v-model="current">
                {{item}}
            </label>
        </p>
        <ul>
            <li v-for="(item, index) in heros " :key="index">
                <img :src="`http://www.aiqianduan.com:56506/images/wzry/${item.pic}.jpg`" alt="">
                <p>
                    {{item.cname}}
                </p>
                <div class="mask" v-if="current != '全部' && item.hero_type != current"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                current: '全部',
                heros: [],
                types: ['全部', '坦克', '法师', '辅助', '战士', '刺客', '射手']
            }
        },
        // 生命周期,当组件被加载之后做的事情
        created() {
            axios.get('http://www.aiqianduan.com:56506/wzry').then(data => {
                // then是然后的意思，回调函数
                console.log(data.data);
                this.heros = data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    label {
        color: white;
    }
    ul {
        list-style: none;
        li {
            position: relative;
            width: 80px;
            height: 90px;
            float: left;
            text-align: center;
            margin-right: 10px;
            margin-bottom: 10px;
            img {
                width: 60px;
                height: 60px;
            }
            p{
                margin: 0;
            }
            .mask {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.8);
            }
        }
    }
</style>