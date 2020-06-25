<template>
    <div>
        <Form ref="myform" :model="myform" :rules="ruleValidate" :label-width="130">
            <!-- 省市县镇的最后写 -->
            <FormItem label="请选择省市县镇" prop="pcas">
                <Dropdown trigger="custom" :visible="isShowDropdown" style="margin-left: 20px">
                    <a href="javascript:void(0)" @click="isShowDropdown = true">
                        请选择省市县镇
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <div class="dropdowninnerbox">
                            <DropdownInn />
                        </div>
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" @click="isShowDropdown = false">取消</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </FormItem>
            <FormItem label="详细地址" prop="d">
                <i-input v-model="myform.d" placeholder="街道/小区/单元门洞/门牌号"></i-input>
            </FormItem>
            <FormItem label="手机号" prop="tel">
                <i-input v-model="myform.tel" placeholder="请输入合法的手机号"></i-input>
            </FormItem>
            <FormItem label="收件人" prop="n">
                <i-input v-model="myform.n" placeholder="请输入收件人姓名（可以用昵称）"></i-input>
            </FormItem>
            <FormItem label="地址别名" prop="alias">
                <Row>
                    <i-col span="6">
                        <i-input v-model="myform.alias" placeholder></i-input>
                    </i-col>
                    <i-col span="16">
                        <Button class="btn" v-for="item in ['家','公司','学校']" :key="item" @click="aliasBtnHan(item)">{{item}}</Button>
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
                // 是否展示下拉菜单
                isShowDropdown: true,
                myform: {
                    // 详细地址
                    d: "",
                    tel: "",
                    n: "",
                    // 地址别名
                    alias: ""
                },
                ruleValidate: {
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
                    tel: [
                        // 必填
                        {
                            required: true,
                            message: "必须填写手机号码",
                            trigger: "blur"
                        },
                        // 正则表达式的校验
                        {
                            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,
                            message: "必须填写合法的手机号码",
                            trigger: "blur"
                        }
                    ],
                    n: [{
                        required: true,
                        message: "必须填写收件人姓名",
                        trigger: "blur"
                    }],
                    alias: [{
                        required: true,
                        message: "必须填写地址别名",
                        trigger: "blur"
                    }]
                }
            };
        },
        methods: {
            aliasBtnHan(item) {
                this.myform.alias = item
            }
        },
        components:{

            
            
            DropdownInn
        }
    };
</script>

<style lang="less" scoped>
    .btn {
        margin-left: 10px;
    }
</style>