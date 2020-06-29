<template>
    <div class="wrap">
        <div class="hd">
            <span :class="{'cur' : current == 'p'}" @click="hdHan('p')">
                <em v-if="p == ''">请选择省份（直辖市）</em>
                <em v-else>{{p}}</em>
            </span>
            <span :class="{'cur' : current == 'c'}" @click="hdHan('c')" v-if="p != ''">
                <em v-if="c == ''">请选择城市</em>
                <em v-else>{{c}}</em>
            </span>
            <span :class="{'cur' : current == 'a'}" @click="hdHan('a')" v-if="c != ''">
                <em v-if="a == ''">请选择县（区）</em>
                <em v-else>{{a}}</em>
            </span>
            <span :class="{'cur' : current == 's'}" @click="hdHan('s')" v-if="a != ''">
                <em v-if="s == ''">请选择镇（街道）</em>
                <em v-else>{{s}}</em>
            </span>
        </div>
        <div class="bd">
            <div v-if="current == 'p'">
                <RadioGroup v-model="currentSheng" type="button" size="small">
                    <Radio label="pinyin">按拼音</Radio>
                    <Radio label="yuqu">按区域</Radio>
                </RadioGroup>
                <div class="sheng" v-if="currentSheng == 'pinyin'">
                    <div v-for="(v, k) in data1" :key="k">
                        <b>{{k}}:</b>
                        <a href="#" v-for="p in v" :key="p" @click="shengHan(p)">{{p}}</a>
                    </div>
                </div>
                <div class="sheng" v-if="currentSheng == 'yuqu'">
                    <div v-for="(v, k) in data2" :key="k">
                        <b>{{k}}:</b>
                        <a href="#" v-for="p in v" :key="p" @click="shengHan(p)">{{p}}</a>
                    </div>
                </div>
            </div>
            <p v-if="current == 'c'">
                <a href="#" v-for="(v, c) in pcasobj[p]" :key="c" @click="shiHan(c)">{{c}}</a>
            </p>
            <p v-if="current == 'a'">
                <a href="#" v-for="(v, a) in pcasobj[p][c]" :key="a" @click="xianHan(a)">{{a}}</a>
            </p>
            <p v-if="current == 's'">
                <a href="#" v-for="s in pcasobj[p][c][a]" :key="s" @click="zhenHan(s)">{{s}}</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pcasobj', 'origin_p', 'origin_c', 'origin_a', 'origin_s'],
        data() {
            return {
                // 当前是pinyin还是quyu
                currentSheng: 'pinyin',
                // 当前是在哪个地方，是pcas
                current: this.origin_s == '' ? 'p' : 's',
                p: this.origin_p || '',
                c: this.origin_c || '',
                a: this.origin_a || '',
                s: this.origin_s || '',
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
            // 点击导航
            hdHan(thing) {
                this.current = thing;
            },
            // 点击p
            shengHan(p) {
                this.p = p;
                // 省后面的清空
                this.c = '';
                this.a = '';
                this.s = '';
                this.current = 'c'
            },
            // 点击c
            shiHan(c) {
                this.c = c;
                // 市后面的清空
                this.a = '';
                this.s = '';
                this.current = 'a'
            },
            // 点击a
            xianHan(a) {
                this.a = a;
                // 县后面的清空
                this.s = '';
                this.current = 's'
            },
            // 点击s
            zhenHan(s) {
                this.s = s;
                this.$emit('zhenHan', {
                    p: this.p,
                    c: this.c,
                    a: this.a,
                    s: this.s
                })
            },
        }
    }
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    .wrap {
        margin: 10px;
        .hd {
            overflow: hidden;
            margin-bottom: 10px;
            span {
                border-bottom: 1px solid #eee;
                float: left;
                font-size: 12px;
                border: 1px solid #eee;
                border-right: none; // border-bottom: none;
                padding: 0 2px;
                cursor: pointer;
                &:last-child {
                    border-right: 1px solid #eee;
                }
                em {
                    float: left;
                }
                &.cur {
                    border-bottom: 2px solid red;
                    color: red;
                }
            }
        }
        em {
            font-style: normal;
        }
        .sheng {
            height: 200px;
            overflow-y: scroll;
            margin-left: 10px;
            font-family: 'consolas';
        }
        .sheng a {
            margin-right: 10px;
        }
        p {
            a {
                margin-right: 10px;
            }
        }
    }
</style>