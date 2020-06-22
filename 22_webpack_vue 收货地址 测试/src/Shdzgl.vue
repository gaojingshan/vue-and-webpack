<template>
    <div>
        <Row :gutter="16">
            <i-col span="6" v-for="(item, index) in arr" :key="index">
                <Card>
                    <b slot="title">{{item.alias}}</b>
                    <div slot="extra">
                        <a href="#">删除</a>
                        <a href="#">修改</a>
                    </div>
                    <div>
                        <p><b>地址：</b>{{item.p}}{{item.c}}{{item.a}}{{item.s}}{{item.d}}</p>
                        <p><b>收件人：</b>{{item.n}}</p>
                        <p><b>手机号：</b>{{item.tel}}</p>
                    </div>
                </Card>
            </i-col>
            <i-col span="6" v-if="arr.length !=4">
                <Card class="p1">
                    <div class="jiahao" @click="isShowModal = true"></div>
                </Card>
            </i-col>
        </Row>
        <Modal v-model="isShowModal" title="增加收货地址">
            <ModalInn />
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import ModalInn from './Components/ModalInn.vue';
    export default {
        data() {
            return {
                arr: [],
                // 显示模态框
                isShowModal: true
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshanwin').then(data => {
                // console.log(data.data);
                this.arr = data.data;
            })
        },
        components: {
            ModalInn
        }
    }
</script>

<style lang="less" scoped>
    .p1 {
        height: 160px;
        cursor: pointer;
        .jiahao {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -50px;
            margin-top: -50px;
            background: url(/images/jiahao1.svg);
            width: 100px;
            height: 100px;
            background-size: cover;
            &:hover {
                background: url(/images/jiahao2.svg);
            }
        }
    }
</style>