<template>
    <div class="wrap">
        <div class="hd">
            <p :class="{'cur' : isShow =='p'}" @click="hd_Han('p')">
                <span v-if="p != ''">{{p}}</span>
                <span v-else>请选择省份（直辖市）</span>
            </p>
            <p :class="{'cur' : isShow == 'c'}" v-if="p !=''" @click="hd_Han('c')">
                <span v-if="c != ''">{{c}}</span>
                <span v-else>请选择城市</span>
            </p>
            <p :class="{'cur' : isShow == 'a'}" v-if="c !=''" @click="hd_Han('a')">
                <span v-if="a != ''">{{a}}</span>
                <span v-else>请选择县（区）</span>
            </p>
            <p :class="{'cur' : isShow == 's'}" v-if="a !=''" @click="hd_Han('s')">
                <span v-if="s != ''">{{s}}</span>
                <span v-else>请选择镇（街道）</span>
            </p>
        </div>
        <!-- 省 -->
        <p v-if="isShow == 'p'">
            <a href="#" v-for="(item, p) in pcas_obj" :key="p" @click="pHan(p)">{{p}}</a>
        </p>
        <!-- 市 -->
        <p v-if="isShow == 'c'">
            <a href="#" v-for="(item, c) in pcas_obj[p]" :key="c" @click="cHan(c)">{{c}}</a>
        </p>
        <!-- 县 -->
        <p v-if="isShow == 'a'">
            <a href="#" v-for="(item, a) in pcas_obj[p][c]" :key="a" @click="aHan(a)">{{a}}</a>
        </p>
        <!-- 镇 -->
        <p v-if="isShow == 's'">
            <a href="#" v-for="(s, index) in pcas_obj[p][c][a]" :key="index" @click="sHan(s)">{{s}}</a>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                // 接口获取的数据
                pcas_obj: {},
                // 选中的省市县镇
                p: '',
                c: '',
                a: '',
                s: '',
                // 当前展示的
                isShow: 'p'
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/pcas').then(data => {
                this.pcas_obj = data.data
            })
        },
        methods: {
            // 点击省
            pHan(p) {
                this.p = p;
                this.isShow = 'c';
            },
            // 点击市
            cHan(c) {
                this.c = c;
                this.isShow = 'a';
            },
            // 点击县
            aHan(a) {
                this.a = a;
                this.isShow = 's';
            },
            // 点击镇
            sHan(s) {
                this.s = s;
            },
            // 点击导航
            hd_Han(show) {
                this.isShow = show;
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrap {
        margin: 10px;
        .hd {
            overflow: hidden;
            border-bottom: 1px solid #eee;
            height: 28px;
        }
        .hd p {
            float: left;
            border: 1px solid #eee;
            padding: 6px;
            font-size: 12px;
            border-right: 0;
            cursor: pointer;
        }
        .hd p.cur {
            color: red;
        }
        .hd p:last-child {
            border-right: 1px solid #eee;
        }
    }
    a {
        font-size: 12px;
        margin-right: 10px;
        margin-top: 10px;
        float: left;
    }
</style>