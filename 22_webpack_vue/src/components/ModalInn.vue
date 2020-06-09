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
                    <DropdownMenu slot="list" style="width: 400px;height: 200px">
                        <div class="dropdowninnerbox">
                            <DropDownInn @zhenHan="zhenHan" />
                        </div>
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" @click="isShowDropDown = false">取消</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </FormItem>
            <FormItem label="详细地址" prop="d">
                <i-input v-model="myform.d" placeholder="街道/小区/单元门洞/门牌号">
                </i-input>
            </FormItem>
            <FormItem label="手机号" prop="tel">
                <i-input v-model="myform.tel" placeholder="请输入合法的手机号码">
                </i-input>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import DropDownInn from './DropDownInn.vue';
    export default {
        components: {
            DropDownInn
        },
        data() {
            return {
                // 是否显示出菜单
                isShowDropDown: false,
                // 父组件接收子组件的pcas
                p: '',
                c: '',
                a: '',
                s: '',
                d:'',
                // 校验规则
                ruleValidate: {
                    // 省市县镇的规则
                    pcas: [{
                        required: true
                    }],
                    // 省市县镇的规则
                    d: [{
                        required: true
                    }],
                    // 电话号码的校验规则
                    tel: [
                        // 必填的校验
                        {
                            required: true,
                            message: '必须填写电话号码',
                            trigger: 'blur'
                        },
                        // 正则表达式的校验
                        {
                            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                            message: '必须填写合法的手机号码',
                            trigger: 'blur'
                        }
                    ],
                },
                // 表单的双向绑定
                myform: {
                    tel: ''
                }
            }
        },
        methods: {
            zhenHan(obj) {
                // console.log(obj);
                this.p = obj.p;
                this.c = obj.c;
                this.a = obj.a;
                this.s = obj.s;
                this.isShowDropDown = false;
            }
        }
    }
</script>

<style lang="less" scoped>
    em {
        font-style: normal;
    }
</style>