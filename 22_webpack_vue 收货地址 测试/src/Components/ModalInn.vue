<template>
    <div>
        <Form ref="myform" :model="myform" :rules="ruleValidate" :label-width="130">
            <FormItem label="请选择省市县镇" prop="pcas">
                <Dropdown trigger="custom" placement="bottom-start" :visible="isShowDropDown">
                    <a href="javascript:void(0)" @click="isShowDropDown = true">
                        请选择省市县镇
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownInn :pcasobj="pcasobj"/>
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
                        <i-input v-model="myform.alias"></i-input>
                    </i-col>
                    <i-col span="18">
                        <Button class="btn" v-for="item in ['家','公司','学校']" :key="item" @click="aliasBtnHan(item)">{{item}}</Button>
                    </i-col>
                </Row>
            </FormItem>
        </Form>
    </div>
</template>

<script>
import axios from 'axios';
import DropdownInn from './DropDownInn.vue';
    export default {
        components:{
            DropdownInn
        },
        data() {
            return {
                // 是否显示出菜单
                isShowDropDown: true,
                // 总数据
                pcasobj:{},
                myform: {
                    // 详细地址
                    d: '',
                    tel: '',
                    n: '',
                    alias: '',
                    pcas: ''
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
                    }]
                }
            }
        },
        methods: {
            // 点击地址别名的常用按钮，做的事情
            aliasBtnHan(thing) {
                this.$set(this.myform, 'alias', thing)
            }
        },
        created(){
            axios.get('http://www.aiqianduan.com:56506/pcas').then(data=>{
                this.pcasobj=data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .btn {
        border: 1px solid #eee;
        padding: 6px 10px;
        margin-left: 10px;
        cursor: pointer;
    }
</style>