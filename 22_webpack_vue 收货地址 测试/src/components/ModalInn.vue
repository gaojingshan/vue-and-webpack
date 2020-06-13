<template>
    <div>
        <div style="overflow:hidden">
            <p style="float:left">请选择省市县镇</p>
            <Dropdown trigger="custom" :visible="isShowDropdown" style="margin-left: 20px;float:left">
                <a href="javascript:void(0)" @click="isShowDropdown = true">
                                    请选择省市县镇
                                    <Icon type="ios-arrow-down"></Icon>
                                </a>
                <DropdownMenu slot="list">
                    <DropdownInn class="dropdowninn" />
                    <div style="text-align: right;margin:10px;">
                        <Button type="primary" @click="isShowDropdown = false">取消</Button>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="详细地址" prop="pcas">
                <i-input v-model="formValidate.pcas" placeholder="街道/小区/单元门洞/门牌号"></i-input>
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
                isShowDropdown: false,
                // 表单
                formValidate: {
                    pcas: ''
                },
                // 校验
                ruleValidate: {
                    pcas: [{
                        required: true,
                        message: 'das',
                        trigger: 'blur'
                    }]
                }
            }
        },
        components: {
            DropdownInn
        }
    }
</script>

<style lang="less" scoped>
    .dropdowninn {
        width: 366px;
    }
</style>