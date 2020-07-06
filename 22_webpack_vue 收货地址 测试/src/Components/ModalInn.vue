<template>
    <div>
        <span>请选择省市县镇</span>
        <Dropdown trigger="custom" :visible="isShowDropDown" style="margin-left: 20px" placement="bottom-start">
            <a href="javascript:void(0)" @click="isShowDropDown = true">
                <span v-if="s == ''">请选择省市县镇</span>
                <span v-else>{{p}}{{c}}{{a}}{{s}}（点击修改）</span>
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list" class="dropinn">
                <DropdownInn @s_han="s_han" v-if="isShowDropDown" :origin_p="p" :origin_c="c" :origin_a="a" :origin_s="s"/>
                <div style="text-align: right;margin:10px;">
                    <Button type="primary" @click="isShowDropDown = false">取消</Button>
                </div>
            </DropdownMenu>
        </Dropdown>
        <Form ref="myform" :model="myform" :rules="ruleValidate" :label-width="130">
            <FormItem label="详细地址" prop="d">
                <i-input v-model="myform.d" placeholder="街道/小区/单元门洞/门牌号"></i-input>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import DropdownInn from './DropDownInn.vue';
    export default {
        data() {
            return {
                // 是否显示下拉菜单
                isShowDropDown:false,
                // 子组件接收的pcas
                p: '',
                c: '',
                a: '',
                s: '',
                myform: {
                    name: '',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                }
            }
        },
        components: {
            DropdownInn,
        },
        methods: {
            s_han(thing) {
                this.p = thing.p;
                this.c = thing.c;
                this.a = thing.a;
                this.s = thing.s;
                this.isShowDropDown = false
            }
        }
    }
</script>

<style lang="less" scoped>
    .dropinn {
        width: 400px;
        height: 300px;
    }
</style>