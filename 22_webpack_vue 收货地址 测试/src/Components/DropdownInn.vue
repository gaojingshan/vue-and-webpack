<template>
    <div class="ddinn">
        <div class="hd">
            <span :class="{'cur': current == 'p'}" @click="hd_Han('p')">
                {{this.p == '' ? '请选择省份（直辖市）': p}}
            </span>
            <span :class="{'cur': current == 'c'}" v-if="p != ''" @click="hd_Han('c')">
                {{this.c == '' ? '请选择城市': c}}
            </span>
            <span :class="{'cur': current == 'a'}" v-if="c != ''" @click="hd_Han('a')">
                {{this.a == '' ? '请选择县（区）': a}}
            </span>
            <span :class="{'cur': current == 's'}" v-if="a != ''" @click="hd_Han('s')">
                {{this.s == '' ? '请选择镇（街道）': s}}
            </span>
        </div>
        <div class="bd">
            <div class="ppp_box" v-if="current == 'p'">
                <RadioGroup v-model="p_show" type="button" size="small">
                    <Radio label="pinyin">按拼音</Radio>
                    <Radio label="quyu">按区域</Radio>
                </RadioGroup>
                <div class="pp_box">
                    <div v-if="p_show == 'pinyin'">
                        <div class="p_box" v-for="(v ,p) in data1" :key="p">
                            <b>{{p}}:</b>
                            <a href="javascript:;" v-for="item in v" :key="item" @click="p_han(item)">{{item}}</a>
                        </div>
                    </div>
                    <div v-if="p_show == 'quyu'">
                        <div class="p_box" v-for="(v ,p) in data2" :key="p">
                            <b>{{p}}:</b>
                            <a href="javascript:;" v-for="item in v" :key="item" @click="p_han(item)">{{item}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="c_box" v-if="current == 'c'">
                <a href="javascript:;" v-for="(v, c) in pcasobj[p]" :key="c" @click="c_han(c)">{{c}}</a>
            </div>
            <div class="c_box" v-if="current == 'a'">
                <a href="javascript:;" v-for="(v, a) in pcasobj[p][c]" :key="a" @click="a_han(a)">{{a}}</a>
            </div>
            <div class="c_box" v-if="current == 's'">
                <a href="javascript:;" v-for="s in pcasobj[p][c][a]" :key="s" @click="s_han(s)">{{s}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        props:['origin_p','origin_c','origin_a','origin_s'],
        data() {
            return {
                p_show: 'pinyin',
                //当前展示
                current: this.origin_s != '' ? 's' : 'p',
                // 当前的省市县镇
                p: this.origin_p || '',
                c: this.origin_c || '',
                a: this.origin_a || '',
                s: this.origin_s || '',
                // 拉取的数据
                pcasobj: {},
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
            hd_Han(thing) {
                this.current = thing;
            },
            p_han(p) {
                this.p = p;
                this.c = '';
                this.a = '';
                this.s = '';
                this.current = 'c';
            },
            c_han(c) {
                this.c = c;
                this.a = '';
                this.s = '';
                this.current = 'a';
            },
            a_han(a) {
                this.a = a;
                this.s = '';
                this.current = 's';
            },
            s_han(s) {
                this.s = s;
                this.$emit('s_han', {
                    p: this.p,
                    c: this.c,
                    a: this.a,
                    s: this.s,
                });

           }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/pcas').then(data => {
                this.pcasobj = data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .ddinn {
        padding-left: 10px;
        .hd {
            height: 30px;
            span {
                font-size: 12px;
                height: 30px;
                line-height: 30px;
                float: left;
                border: 1px solid #eee;
                padding: 0 6px;
                border-right: none;
                cursor: pointer;
                &.cur {
                    color: red;
                    border-bottom: 2px solid red;
                }
                &:last-child {
                    border-right: 1px solid #eee;
                }
            }
        }
        .bd {
            height: 220px;
            margin-top: 10px;
            .pp_box {
                height: 190px;
                overflow-y: scroll;
                margin-top: 10px;
                b {
                    font-size: 12px;
                }
                a {
                    padding: 6px;
                }
            }
            .c_box {
                a {
                    padding: 3px;
                    float: left;
                }
            }
        }
    }
</style>