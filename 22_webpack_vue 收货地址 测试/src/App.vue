<template>
    <div class="wrap">
        <Row :gutter="16">
            <i-col span="6" v-for="(item, index) in arr" :key="index">
                <Card>
                    <p slot="title"><b style="font-size:14px">{{item.alias}}</b></p>
                    <p slot="extra">
                        <a href="#">删除</a>
                        <a href="#">修改</a>
                    </p>
                    <div>
                        <p><b>地址：</b>{{item.p}}{{item.c}}{{item.a}}{{item.s}}{{item.d}}</p>
                        <p><b>姓名：</b>{{item.n}}</p>
                        <p><b>电话：</b>{{item.tel}}</p>
                    </div>
                </Card>
            </i-col>
            <i-col span="6">
                <Card class="cardSpan">
                    <span @click="isShowModal = true">+</span>
                </Card>
            </i-col>
        </Row>
        <!-- Modal -->
        <Modal v-model="isShowModal" title="增加收货地址">
            <p style="float:left">请选择省市县镇</p>
            <Dropdown trigger="custom" :visible="isShowDropDown" placement="bottom-start" style="margin-left: 20px;float:left">
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
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import DropdownInn from './components/DropdownInn.vue';
    export default {
        data() {
            return {
                // 接口返回的收货地址信息的数组
                arr: [],
                // 是否显示模态框
                isShowModal: true,
                // 是否显示下拉菜单
                isShowDropDown: true,
                // 子组件传入的pcas
                p: '',
                c: '',
                a: '',
                s: '',
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshansmart').then(data => {
                console.log(data.data);
                this.arr = data.data;
            })
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
                this.isShowDropDown=false
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrap {
        width: 1000px;
        margin: 40px auto;
        .cardSpan {
            line-height: 120px;
            font-size: 100px;
            text-align: center;
            height: 168px;
            span {
                cursor: pointer;
            }
        }
    }
    em {
        font-style: normal;
    }
</style>