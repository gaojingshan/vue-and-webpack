<template>
    <div class="ddinn">
        <div v-if="Object.keys(pcasobj).length != 0">
            <div class="hd">
                <span :class="{'cur' : nowShow == 'p'}" @click="hd_han('p')">
                        {{p =='' ? '请选择省份（直辖市）' : p}}
                    </span>
                <span v-if="p != ''" :class="{'cur' : nowShow == 'c'}" @click="hd_han('c')">
                        {{c =='' ? '请选择城市' : c}}
                                            
                    </span>
                <span v-if="c != ''" :class="{'cur' : nowShow == 'a'}" @click="hd_han('a')">
                        {{a =='' ? '请选择县（区）' : a}}
                                            
                    </span>
                <span v-if="a != ''" :class="{'cur' : nowShow == 's'}" @click="hd_han('s')">
                        {{s =='' ? '请选择镇（街道）' : s}}
                    </span>
            </div>
            <div class="bd">
                <div v-if="nowShow == 'p'" class="s_box">
                    <RadioGroup v-model="sheng_show_type" type="button" size="small">
                        <Radio label="pinyin">按拼音</Radio>
                        <Radio label="quyu">按区域</Radio>
                    </RadioGroup>
                    <div class="s_box_bd">
                        <div v-if="sheng_show_type == 'pinyin'">
                            <div v-for="(v,k) in data1" :key="k" class="contentrow">
                                <b>{{k}}:</b>
                                <a href="#" v-for="p in v" :key="p" @click="shengHan(p)">
                                                    {{p}}
                                                </a>
                            </div>
                        </div>
                        <div v-if="sheng_show_type == 'quyu'">
                            <div v-for="(v,k) in data2" :key="k" class="contentrow">
                                <b>{{k}}:</b>
                                <a href="#" v-for="p in v" :key="p" @click="shengHan(p)">
                                                    {{p}}
                                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p v-if="nowShow == 'c'">
                    <a v-for="(v ,c) in pcasobj[p]" :key="c" href="javascript:;" @click="shiHan(c)">{{c}}</a>
                </p>
                <p v-if="nowShow == 'a'">
                    <a v-for="(v, a) in pcasobj[p][c]" :key="a" href="javascript:;" @click="xianHan(a)">{{a}}</a>
                </p>
                <p v-if="nowShow == 's'">
                    <a v-for="(s, index) in pcasobj[p][c][a]" :key="index" href="javascript:;" @click="zhenHan(s)">{{s}}</a>
                </p>
            </div>
            <!-- {{Object.keys(pcasobj)}} -->
            <!-- <p v-if="nowShow == 'p'">
                                <a v-for="(v, p) in pcasobj" :key="p" href="javascript:;" @click="shengHan(p)">{{p}}</a>
                            </p> -->
        </div>
        <div v-else>
            <Spin style="position:absolute;left:50%;top:50%;margin-left:-15px;margin-top:-15px"></Spin>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['origin_p', 'origin_c', 'origin_a', 'origin_s', 'pcasobj'],
        data() {
            return {
                // 省的当前显示模式
                sheng_show_type: 'pinyin',
                // 当前显示什么，p省c市a区s镇
                nowShow: this.origin_s == '' ? "p" : "s",
                // 用户选择的省
                p: this.origin_p || "",
                // 用户选择的市
                c: this.origin_c || "",
                // 用户选择的县
                a: this.origin_a || "",
                // 用户选择的镇
                s: this.origin_s || "",
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
            };
        },
        created() {
        },
        methods: {
            // 用户点击某个省之后做的事情
            shengHan(p) {
                // 让p属性改变为用户点击的p
                this.p = p;
                // 选了省，那么市、县、区就要清空
                this.c = "";
                this.a = "";
                this.s = "";
                // 改变nowShow为c
                this.nowShow = "c";
            },
            shiHan(c) {
                this.c = c;
                this.a = "";
                this.s = "";
                this.nowShow = "a";
            },
            xianHan(a) {
                this.a = a;
                this.s = "";
                this.nowShow = "s";
            },
            zhenHan(s) {
                this.s = s;
                // 通知父组件
                this.$emit("zhenHan", {
                    p: this.p,
                    c: this.c,
                    a: this.a,
                    s: this.s
                });
            },
            // 点击头部的时候
            hd_han(n) {
                this.nowShow = n;
            }
        }
    };
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
                    // background-color: rgb(250, 235, 151);
                    border-bottom: 2px solid red;
                    color: red;
                }
                em {
                    font-style: normal;
                }
                &:last-child {
                    border-right: 1px solid #eee;
                }
            }
        }
        .bd {
            height: 220px; // 溢出滚动
            padding-left: 10px;
            .contentrow {
                line-height: 20px;
                font-family: 'consolas';
                a {
                    padding: 0 6px;
                }
            }
            .s_box_bd {
                height: 180px;
                overflow-y: scroll;
                margin-top: 10px;
            }
        }
    }
    p a {
        float: left;
        margin-right: 10px;
        font-size: 12px;
    }
</style>