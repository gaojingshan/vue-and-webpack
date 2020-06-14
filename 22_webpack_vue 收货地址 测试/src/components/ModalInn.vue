<template>
    <div>
        <Form ref="myform" :model="myform" :rules="ruleValidate" :label-width="130">
            <FormItem label="请选择省市县镇" prop="pcas">
                <Dropdown trigger="custom" :visible="isShowDropDown" placement="bottom-start">
                    <a href="javascript:void(0)" @click="isShowDropDown = true">
                        <em v-if="p == ''">请选择省市县镇</em>
                        <em v-else>{{p}}{{c}}{{a}}{{s}}(点击修改)</em>
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list" style="width:388px">
                        <DropdownInn @sHan="sHan" />
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" @click="isShowDropDown = false">取消</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </FormItem>
            <FormItem label="详细地址" prop="d">
                <i-input v-model="myform.d" placeholder="街道/小区/单元门洞/门牌号"></i-input>
            </FormItem>
            <FormItem label="手机号" prop="tel">
                <i-input v-model="myform.tel" placeholder="请输入合法的手机号码"></i-input>
            </FormItem>
            <FormItem label="收件人" prop="n">
                <i-input v-model="myform.n" placeholder="请输入收件人姓名（可以用昵称）"></i-input>
            </FormItem>
            <FormItem label="地址别名" prop="alias">
                <Row>
                    <i-col span="6">
                        <i-input v-model="myform.alias">{{myform.alias}}</i-input>
                    </i-col>
                    <i-col span="18">
                        <p class="palias" v-for="(item, index) in ['家','公司','学校']" :key="index" @click="myform.alias = item">{{item}}</p>
                    </i-col>
                </Row>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import DropdownInn from './DropdownInn.vue';
    export default {
        data() {
            return {
                // 是否显示下拉菜单
                isShowDropDown: false,
                // 子组件传入的pcas
                p: '',
                c: '',
                a: '',
                s: '',
                myform: {
                    pcas: '',
                    d: '',
                    tel: '',
                    n: '',
                    alias: '',
                },
                ruleValidate: {
                    pcas: [{
                        required: true,
                        message: '必须填写省市县镇',
                        trigger: 'blur'
                    }],
                    d: [{
                            required: true,
                            message: '必须填写详细地址',
                            trigger: 'blur'
                        },
                        {
                            min: 10,
                            max: 30,
                            message: '字数在10到30字之间',
                            trigger: 'blur'
                        }
                    ],
                    tel: [{
                            required: true,
                            message: '必须填写电话号码',
                            trigger: 'blur'
                        },
                        {
                            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                            message: '必须填写合法的手机号码',
                            trigger: 'blur'
                        }
                    ],
                    n: [{
                        required: true,
                        message: '必须填写收件人姓名',
                        trigger: 'blur'
                    }],
                    alias: [{
                        required: true,
                        message: '必须填写地址别名',
                        trigger: 'blur'
                    }],
                }
            }
        },
        components: {
            DropdownInn
        },
        methods: {
            sHan(thing) {
                this.p = thing.p;
                this.c = thing.c;
                this.a = thing.a;
                this.s = thing.s;
                this.isShowDropDown = false;
                this.$set(this.myform, 'pcas', this.p + this.c + this.a + this.s)
            }
        }
    }
</script>

<style lang="less" scoped>
    em {
        font-style: normal;
    }
    .palias {
        float: left;
        padding: 0 14px;
        border: 1px solid #eee;
        margin-left: 10px;
        cursor: pointer;
    }
</style>