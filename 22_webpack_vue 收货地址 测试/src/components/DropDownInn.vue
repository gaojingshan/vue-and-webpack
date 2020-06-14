<template>
    <div class="dropinn">
        <!-- {{Object.keys(pcas_obj)}} -->
        <div class="hd">
            <p :class="{'cur' : now == 'p'}" @click="navHan('p')">
                <em v-if="p != ''">{{p}}</em>
                <em v-else>请选择省份（直辖市）</em>
            </p>
            <p :class="{'cur' : now == 'c'}" v-if="p!=''" @click="navHan('c')">
                <em v-if="c != ''">{{c}}</em>
                <em v-else>请选择城市</em>
            </p>
            <p :class="{'cur' : now == 'a'}" v-if="c!=''" @click="navHan('a')">
                <em v-if="a != ''">{{a}}</em>
                <em v-else>请选择县（区）</em>
            </p>
            <p :class="{'cur' : now == 's'}" v-if="a!=''" @click="navHan('s')">
                <em v-if="s != ''">{{s}}</em>
                <em v-else>请选择镇（街道）</em>
            </p>
        </div>
        <div class="bd">
            <div v-if="now == 'p'">
                <a href="#" v-for="(v, p) in pcas_obj" :key="p" @click="pHan(p)">{{p}}</a>
            </div>
            <div v-if="now == 'c'">
                <a href="#" v-for="(v, c) in pcas_obj[p]" :key="c" @click="cHan(c)">{{c}}</a>
            </div>
            <div v-if="now == 'a'">
                <a href="#" v-for="(v, a) in pcas_obj[p][c]" :key="a" @click="aHan(a)">{{a}}</a>
            </div>
            <div v-if="now == 's'">
                <a href="#" v-for="(s, v) in pcas_obj[p][c][a]" :key="v" @click="sHan(s)">{{s}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                // 获取接口的数据
                pcas_obj: {},
                // 当前选择的省市县镇
                p: '',
                c: '',
                a: '',
                s: '',
                // 当前所在的是哪个地方
                now: 'p'
            };
        },
        created() {
            axios.get("http://www.aiqianduan.com:56506/pcas").then(data => {
                this.pcas_obj = data.data;
            });
        },
        methods: {
            pHan(p) {
                this.p = p;
                // 清空后面的值
                this.c = '';
                this.a = '';
                this.s = '';
                this.now = 'c';
            },
            cHan(c) {
                this.c = c;
                // 清空后面的值
                this.a = '';
                this.s = '';
                this.now = 'a';
            },
            aHan(a) {
                this.a = a;
                // 清空后面的值
                this.s = '';
                this.now = 's';
            },
            sHan(s) {
                this.s = s;
                this.now = 's';
                this.$emit('sHan', {
                    p: this.p,
                    c: this.c,
                    a: this.a,
                    s: this.s
                })
            },
            navHan(pcas) {
                this.now = pcas;
            }
        }
    };
</script>

<style lang="less" scoped>
    .dropinn {
        margin-left: 6px;
    }
    .hd {
        overflow: hidden;
        border-bottom: 1px solid #eee;
        p {
            float: left;
            font-size: 10px;
            margin: 4px;
            padding: 4px;
            border: 1px solid #eee;
            border-right: none;
            border-bottom: none;
            cursor: pointer;
            &:last-child {
                border-right: 1px solid #eee;
            }
            &.cur {
                font-weight: bold;
                color: red;
                border-bottom: 2px solid red;
                display: block;
            }
        }
    }
    .bd a {
        float: left;
        font-size: 12px;
        margin: 5px;
    }
    em {
        font-style: normal;
    }
</style>