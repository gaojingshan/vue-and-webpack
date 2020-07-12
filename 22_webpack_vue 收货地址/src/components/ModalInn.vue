<template>
    <div>
        <Form ref="myform" :model="myform" :rules="ruleValidate" :label-width="130">
            <FormItem label="请选择省市县镇" prop="pcas">
                <Dropdown trigger="custom" placement="bottom-start" :visible="isShowDropDown">
                    <a href="javascript:void(0)" @click="isShowDropDown = true">
                        <em v-if="s != ''">{{p}}{{c}}{{a}}{{s}}(点击修改)</em>
                        <em v-else>请选择省市县镇</em>
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list" style="width: 440px;height: 320px">
                        <div>
                            <!-- 在把pcas传回子组件:origin_ -->
                            <DropDownInn v-if="isShowDropDown" @zhenHan="zhenHan" :origin_p="p" :origin_c="c" :origin_a="a" :origin_s="s" :pcasobj="pcasobj" />
                        </div>
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" @click="isShowDropDown = false">取消</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </FormItem>
            <FormItem label="详细地址" prop="d">
                <i-input v-model="myform.d" placeholder="街道/小区/单元门洞/门牌号"></i-input>
                <Checkbox v-model="isUseCainiao" :disabled="s==''">使用菜鸟驿站代收</Checkbox>
                <Alert type="error" v-show="s==''">
                    请先选择省市县镇再勾选此对勾
                </Alert>
            </FormItem>
            <FormItem label="手机号" prop="tel">
                <i-input v-model="myform.tel" placeholder="请输入合法的手机号码"></i-input>
            </FormItem>
            <FormItem label="收件人" prop="n">
                <i-input v-model="myform.n" placeholder="请输入收件人姓名（可以用昵称）"></i-input>
            </FormItem>
            <FormItem label="地址别名" prop="alias">
                <Row>
                    <i-col :span="6">
                        <i-input v-model="myform.alias"></i-input>
                    </i-col>
                    <i-col :span="18">
                        <Button class="btn" v-for="(item, index) in ['家','公司','学校']" :key="index" @click="aliasBtnHan(item)">{{item}}</Button>
                    </i-col>
                </Row>
            </FormItem>
        </Form>
        <Modal :value="isShowCainiaoModal" title="请选择菜鸟驿站代收点" width='700'>
            <div slot="footer">
                <Button>取消</Button>
                <Button type="primary" @click="CainiaoModalOkHan">确定</Button>
            </div>
            <CainiaoModal ref="cainiaomodal" :p="p" :c="c" v-if="isShowCainiaoModal" />
        </Modal>
    </div>
</template>

<script>
    import axios from "axios";
    import DropDownInn from "./DropDownInn.vue";
    import CainiaoModal from './CainiaoModal.vue';
    export default {
        components: {
            DropDownInn,
            CainiaoModal
        },
        created() {
            // 拉取pcas省市县镇数据
            axios.get("http://www.aiqianduan.com:56506/pcas").then(data => {
                // 覆盖默认空对象
                this.pcasobj = data.data;
            });
        },
        data() {
            return {
                // 是否显示出菜单
                isShowDropDown: false,
                // 总数据
                pcasobj: {},
                // 菜鸟驿站复选框的选中与否
                isUseCainiao: false,
                // 菜鸟modal
                isShowCainiaoModal: true,
                // 父组件接收子组件的pcas
                p: "北京市",
                c: "市辖区",
                a: "",
                s: "",
                // 校验规则
                ruleValidate: {
                    // 省市县镇的规则
                    pcas: [{
                        required: true,
                        message: "必须选择省市县镇",
                        trigger: "blur"
                    }],
                    // 详细地址的规则
                    d: [
                        // 必填
                        {
                            required: true,
                            message: "必须填写详细地址",
                            trigger: "blur"
                        },
                        // 字数校验
                        {
                            min: 10,
                            max: 30,
                            message: "字数在10到30字之间",
                            trigger: "blur"
                        }
                    ],
                    // 电话号码的校验规则
                    tel: [
                        // 必填的校验
                        {
                            required: true,
                            message: "必须填写电话号码",
                            trigger: "blur"
                        },
                        // 正则表达式的校验
                        {
                            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                            message: "必须填写合法的手机号码",
                            trigger: "blur"
                        }
                    ],
                    // 收件人姓名的规则
                    n: [
                        // 必填
                        {
                            required: true,
                            message: "必须填写收件人姓名",
                            trigger: "blur"
                        }
                    ],
                    // 地址别名的规则
                    alias: [
                        // 必填
                        {
                            required: true,
                            message: "必须填写地址别名",
                            trigger: "blur"
                        }
                    ]
                },
                // 表单的双向绑定
                myform: {
                    tel: "",
                    d: "",
                    n: "",
                    alias: "",
                    // 省市县镇
                    pcas: ""
                }
            };
        },
        methods: {
            // 当选完镇了之后
            zhenHan(obj) {
                // console.log(obj);
                this.p = obj.p;
                this.c = obj.c;
                this.a = obj.a;
                this.s = obj.s;
                this.isShowDropDown = false;
                // 更改pcas属性
                this.$set(this.myform, "pcas", this.p + this.c + this.a + this.s);
            },
            // 点击地址别名的常用按钮，做的事情
            aliasBtnHan(thing) {
                // 双向绑定了已经
                this.$set(this.myform, "alias", thing);
            },
            // 选择菜鸟驿站的modal框的确定
            CainiaoModalOkHan() {
                // 检查是否已经选择了菜鸟驿站
                // 如果用户没有选择任何的菜鸟驿站
                if (this.$refs.cainiaomodal.nowitem == null) {
                    // 弹出判断对话框
                    var confirmModal = confirm('你没有选择任何的菜鸟驿站，真的要关闭么？');
                    if (confirmModal) {
                        this.isShowCainiaoModal = false;
                    }
                } else {
                    // 当用户选择好了菜鸟驿站的时候
                    // 把数据拉出来
                    var d = `[菜鸟驿站]${this.$refs.cainiaomodal.nowitem.address}`;
                    this.myform.d = d;
                    // 关闭模态框
                    this.isShowCainiaoModal = false;
                }
            }
        },
        // 监控。vue有双向绑定，所以就必须有watch，得到改变那一瞬间的事件
        watch: {
            isUseCainiao(v) {
                if (v) {
                    // 如果用户勾选了使用菜鸟驿站服务，那么就弹出一个新的弹出层
                    this.isShowCainiaoModal = true
                }
            }
        },
    };
</script>

<style lang="less" scoped>
    em {
        font-style: normal;
    }
    .btn {
        margin-left: 6px;
    }
</style>