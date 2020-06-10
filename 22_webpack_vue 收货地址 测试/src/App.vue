<template>
    <div class="wrap">
        <Row :gutter="16">
            <i-col span="6" v-for="(item,index) in obj" :key="index">
                <Card>
                    <div slot="title"><b>{{item.alias}}</b></div>
                    <div slot="extra">
                        <a href="#">删除</a>
                        <a href="#">修改</a>
                    </div>
                    <div>
                        <p><b>地址：</b>{{item.p}}{{item.c}}{{item.a}}{{item.s}}{{item.d}}</p>
                        <p><b>姓名：</b>{{item.n}}</p>
                        <p><b>电话：</b>{{item.tel}}</p>
                    </div>
                </Card>
            </i-col>
            <i-col span="6">
                <Card class="card">
                    <span>+</span>
                </Card>
            </i-col>
        </Row>
        <!-- 模态框 -->
        <Modal v-model="isShowModal" title="增加收货地址" @on-ok="ok" @on-cancel="cancel">
            <ModalInn />
            <p>请选择省市县镇</p>
            <Dropdown trigger="custom" :visible="isShowDropdown" style="margin-left: 20px">
                <a href="javascript:void(0)" @click="isShowDropdown = true">
                    custom 触发
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <p>常用于各种自定义下拉内容的场景。</p>
                    <div style="text-align: right;margin:10px;">
                        <Button type="primary" @click="isShowDropdown = false">关闭</Button>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import ModalInn from './components/ModalInn.vue';
    export default {
        data() {
            return {
                obj: {},
                // 是否显示模态框
                isShowModal: true,
                // 是否显示下菜单
                isShowDropdown: true
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshanbeautiful').then(data => {
                console.log(data.data);
                this.obj = data.data;
            })
        },
        components(){
            ModalInn
        }
    }
</script>

<style lang="less" scoped>
    .wrap {
        width: 1000px;
        margin: 40px auto;
        .card {
            height: 160px;
            text-align: center;
            font-size: 100px;
            line-height: 120px;
            span {
                cursor: pointer;
            }
        }
    }
</style>