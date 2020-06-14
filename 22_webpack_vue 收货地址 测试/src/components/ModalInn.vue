<template>
    <div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="130">
            <FormItem label="请选择省市县镇" prop="pcas">
                <!-- <i-input v-model="formValidate.pcas" placeholder="街道/小区/单元门洞/门牌号"></i-input> -->
                <Dropdown trigger="custom" :visible="isShowDropdown"  placement="bottom-start">
                    <a href="javascript:void(0)" @click="isShowDropdown = true">
                        <span v-if="p == ''">请选择省市县镇</span>
                        <span v-else>{{p}}{{c}}{{a}}{{s}}</span>
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list" style="width: 400px;height: 200px">
                        <DropdownInn class="dropdowninn" @sHan="sHan" />
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" @click="isShowDropdown = false">取消</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </FormItem>
            <FormItem label="详细地址" prop="d">
                <i-input v-model="formValidate.d" placeholder="街道/小区/单元门洞/门牌号"></i-input>
            </FormItem>
            <FormItem label="手机号" prop="tel">
                <i-input v-model="formValidate.tel" placeholder="请输入合法的手机号"></i-input>
            </FormItem>
            <FormItem label="收件人" prop="n">
                <i-input v-model="formValidate.n" placeholder="请输入收件人姓名（可以用昵称）"></i-input>
            </FormItem>
            <FormItem label="地址别名" prop="alias">
                <Row>
                    <i-col span="6">
                        <i-input v-model="formValidate.alias"></i-input>
                    </i-col>
                    <!-- <i-col span="6">
                     </i-col> -->
                    <span style="padding:0 10px;margin-left:10px;border:1px solid #ccc;display:block;float:left;text-align:center;border-radius:2px;cursor:pointer" v-for="(item, index) in arr" :key="index" @click="aliasBtnHan(item)">{{item}}</span>
                </Row>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import DropdownInn from './DropDownInn.vue';
    export default {
        data() {
            return {
                arr: ['家', '公司', '学校'],
                p: '',
                c: '',
                a: '',
                s: '',
                // 是否显示下拉菜单
                isShowDropdown: false,
                // 表单
                formValidate: {
                    pcas: '',
                    d: '',
                    tel: '',
                    n: '',
                    alias: '',
                },
                // 校验
                ruleValidate: {
                    pcas: [{
                        required: true,
                        message: '必须选择省市县镇',
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
                            message: '必须填写合法的手机号',
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
            // 点击镇后获取选中的值
            sHan(thing) {
                this.p = thing.p;
                this.c = thing.c;
                this.a = thing.a;
                this.s = thing.s;
                // 下拉菜单关闭
                this.isShowDropdown = false,
                this.$set(this.formValidate, 'pcas', this.p + this.c + this.a + this.s)
            },
            aliasBtnHan(thing) {
                this.$set(this.formValidate, 'alias', thing)
            }
        }
    }
</script>

<style lang="less" scoped>
    .dropdowninn {
        width: 366px;
    }
</style>