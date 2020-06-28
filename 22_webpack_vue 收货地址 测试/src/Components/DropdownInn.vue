<template>
    <div class="ddinn">
        <div v-if="Object.keys(pcasobj).length != 0">
            <!-- 头部 -->
            <div class="hd">
                <span :class="{'cur' : nowShow == 'p'}" @click="hd_han('p')">
            {{p == '' ? '请选择省份（直辖市）': p}}
        </span>
                <span :class="{'cur' : nowShow == 'c'}" @click="hd_han('c')">
            {{c == '' ? '请选择城市': c}}
        </span>
                <span :class="{'cur' : nowShow == 'a'}" @click="hd_han('a')">
            {{a == '' ? '请选择县（区）': a}}
        </span>
                <span :class="{'cur' : nowShow == 's'}" @click="hd_han('s')">
            {{s == '' ? '请选择镇（街道）': s}}
        </span>
            </div>
            <!-- 正文 -->
            <div class="bd">
                <div v-if="nowShow == 'p'" class="s_box">
                    <RadioGroup v-model="sheng_show_type" type="button" size="small">
                        <Radio label="pinyin">按拼音</Radio>
                        <Radio label="quyu">按区域</Radio>
                    </RadioGroup>
                    <div class="s_box_bd">
                        <div v-if="sheng_show_type == 'pinyin'">
                            <div v-for="(v ,k) in data1" :key="k" class="contentrow">
                                <b>{{k}}:</b>
                                <a href="#" v-for="p in v" :key="p" @click="shengHan(p)">
                            {{p}}
                        </a>
                            </div>
                        </div>
                        <div v-if="sheng_show_type == 'quyu'">
                            <div v-for="(v, k) in data2" :key="k" class="contentrow">
                                <b>{{k}}:</b>
                                <a href="#" v-for="p in v" :key="p" @click="shengHan(p)">{{p}}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p v-if="nowShow == 'c'">
                    <a href="javascript:;" v-for="(v, c) in pcasobj[p]" :key="c" @click="shiHan(c)">{{c}}</a>
                </p>
                <p v-if="nowShow == 'a'">
                    <a href="javascript:;" v-for="(v, a) in pcasobj[p][c]" :key="a" @click="xianHan(a)">{{a}}</a>
                </p>
                <p v-if="nowShow == 's'">
                    <a href="javascript:;" v-for="(s,index) in pcasobj[p][c][a]" :key="index" @click="zhenHan(s)">{{s}}</a>
                </p>
            </div>
        </div>
        <div v-else>
            <Spin class="spin"></Spin>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pcasobj'],
        data() {
            return {
                // 省的当前显示模式
                sheng_show_type: 'pinyin',
                // 当前显示什么，pcas
                nowShow: 'p',
                // 当前选择的省
                p: '',
                // 当前选择的市
                c: '',
                // 当前选择的县
                a: '',
                // 当前选择的镇
                s: '',
                data1: {
                    A: ["安徽省"],
                    B: ["北京市"],
                    C: ["重庆市"],
                    F: ["福建省"],
                    G: ["甘肃省", "广东省", "广西壮族自治区", "贵州省"],
                    H: ["海南省", "河北省", "河南省", "黑龙江省", "湖北省", "湖南省"],
                    J: ["江西省", "吉林省", "江苏省"],
                    L: ["辽宁省"],
                    N: ["内蒙古", "宁夏回族"],
                    Q: ["青海省"],
                    S: ["山西省", "山东省", "陕西省", "上海市", "四川省"],
                    T: ["天津市"],
                    X: ["西藏自治区", "新疆维吾尔自治区"],
                    Y: ["云南省"],
                    Z: ["浙江省"]
                },
                data2: {
                    东北: ["黑龙江省", "吉林省", "辽宁省", "内蒙古"],
                    华北: ["北京市", "天津市", "河北省"],
                    西南: [
                        "西藏自治区",
                        "云南省",
                        "广西壮族自治区",
                        "贵州省",
                        "四川省",
                        "重庆市"
                    ],
                    东南: ["福建省", "江西省"],
                    中原: [
                        "河南省",
                        "山西省",
                        "陕西省",
                        "江苏省",
                        "湖北省",
                        "湖南省",
                        "安徽"
                    ],
                    华东: ["山东省", "上海市", "浙江省"],
                    西北: ["新疆维吾尔自治区", "青海省", "宁夏回族", "甘肃省"],
                    华南: ["海南省", "广东省"]
                }
            }
        },
        methods: {
            // 点击头部的时候
            hd_han(n) {
                this.nowShow = n
            },
            // 点击省份的时候
            shengHan(p) {
                this.p = p;
                this.c = '';
                this.a = '';
                this.s = '';
                // 改变nowShow为c
                this.nowShow = 'c'
            },
            // 点击市的时候
            shiHan(c) {
                this.c = c;
                this.a = '';
                this.s = '';
                // 改变nowShow为a
                this.nowShow = 'a'
            },
            // 点击县的时候
            xianHan(a) {
                this.a = a;
                this.s = '';
                // 改变nowShow为s
                this.nowShow = 's'
            },
            // 点击镇的时候
            zhenHan(s) {
                this.s = s;
            },
        }
    }
</script>

<style lang="less" scoped>
    .ddinn {
        width: 450px;
        height: 270px;
        padding: 5px;
        .hd {
            overflow: hidden;
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
                    border-bottom: 2px solid red;
                    color: red;
                }
                &:last-child {
                    border-right: 1px solid #eee;
                }
            }
        }
        .bd {
            height: 220px;
            padding-left: 10px;
            .s_box_bd {
                height: 180px;
                overflow-y: scroll;
                margin-top: 10px;
            }
            .contentrow {
                line-height: 20px;
                font-family: 'consolas';
                a {
                    padding: 0 6px;
                }
            }
            p {
                a {
                    float: left;
                    margin-right: 10px;
                    font-size: 12px;
                }
            }
        }
        .spin{
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -15px;
            margin-top: -15px;
        }
    }
</style>