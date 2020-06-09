<template>
    <div class="ddinn">
        <div class="hd">
            <span :class="{'cur' : nowShow == 'p'}" @click="hd_han('p')">
                <em v-if="p != ''">{{p}}</em>
                <em v-else>请选择省份（直辖市）</em>
            </span>
            <span v-if="p != ''" :class="{'cur' : nowShow == 'c'}" @click="hd_han('c')">
                <em v-if="c != ''">{{c}}</em>
                <em v-else>请选择城市</em>
            </span>
            <span v-if="c != ''" :class="{'cur' : nowShow == 'a'}" @click="hd_han('a')">
                <em v-if="a != ''">{{a}}</em>
                <em v-else>请选择县（区）</em>
            </span>
            <span v-if="a != ''" :class="{'cur' : nowShow == 's'}" @click="hd_han('s')">
                <em v-if="s != ''">{{s}}</em>
                <em v-else>请选择镇（街道）</em>
            </span>
        </div>
        <!-- {{Object.keys(pcasobj)}} -->
        <p v-if="nowShow == 'p'">
            <a v-for="(v, p) in pcasobj" :key="p" href="javascript:;" @click="shengHan(p)">
                {{p}}
            </a>
        </p>
        <p v-if="nowShow == 'c'">
            <a v-for="(v ,c) in pcasobj[p]" :key="c" href="javascript:;" @click="shiHan(c)">
                {{c}}
            </a>
        </p>
        <p v-if="nowShow == 'a'">
            <a v-for="(v, a) in pcasobj[p][c]" :key="a" href="javascript:;" @click="xianHan(a)">
                {{a}}
            </a>
        </p>
        <p v-if="nowShow == 's'">
            <a v-for="(s, index) in pcasobj[p][c][a]" :key="index" href="javascript:;" @click="zhenHan(s)">
                {{s}}
            </a>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                pcasobj: {},
                // 当前显示什么，p省c市a区s镇
                nowShow: 'p',
                // 用户选择的省
                p: '',
                // 用户选择的市
                c: '',
                // 用户选择的县
                a: '',
                // 用户选择的镇
                s: ''
            }
        },
        created() {
            // 拉取pcas省市县镇数据
            axios.get('http://www.aiqianduan.com:56506/pcas').then(data => {
                // 覆盖默认空对象
                this.pcasobj = data.data
            })
        },
        methods: {
            // 用户点击某个省之后做的事情
            shengHan(p) {
                // 让p属性改变为用户点击的p
                this.p = p;
                // 选了省，那么市、县、区就要清空
                this.c = '';
                this.a = '';
                this.s = '';
                // 改变nowShow为c
                this.nowShow = 'c';
            },
            shiHan(c) {
                this.c = c;
                this.a = '';
                this.s = '';
                this.nowShow = 'a'
            },
            xianHan(a) {
                this.a = a;
                this.s = '';
                this.nowShow = 's'
            },
            zhenHan(s) {
                this.s = s;
                // 通知父组件
                this.$emit('zhenHan', {
                    p: this.p,
                    c: this.c,
                    a: this.a,
                    s: this.s,
                })
            },
            // 点击头部的时候
            hd_han(n) {
                this.nowShow = n
            }
        }
    }
</script>

<style lang="less" scoped>
    .ddinn {
        padding: 5px;
        .hd {
            height: 20px;
            border-bottom: 1px solid #eee;
            margin-bottom: 10px;
            span {
                float: left;
                padding: 0 9px;
                border: 1px solid #eee;
                border-right: none;
                border-bottom: none;
                font-size: 12px;
                cursor: pointer;
                &.cur {
                    background-color: rgb(250, 235, 151);
                }
                em {
                    font-style: normal;
                }
                &:last-child{
                    border-right: 1px solid #eee;
                }
            }
        }
    }
    a {
        float: left;
        margin-right: 10px;
        font-size: 12px;
    }
</style>