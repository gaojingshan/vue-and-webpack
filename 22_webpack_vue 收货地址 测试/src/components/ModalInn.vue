<template>
    <div>
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
</template>

<script>
    import DropdownInn from './DropDownInn.vue';
    export default {
        data() {
            return {
                // 是否显示下菜单
                isShowDropdown: true,
                
            }
        },
        components: {
            DropdownInn
        }
    }
</script>

<style lang="less" scoped>
    .dropdowninn{
        width: 366px;
    }
</style>