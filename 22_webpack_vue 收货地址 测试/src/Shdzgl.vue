<template>
    <div>
        <Row :gutter="16">
            <i-col span="6" v-for="(item, index) in arr" :key="index">
                <Card>
                    <div slot="title">
                        <b>{{item.alias}}</b>
                    </div>
                    <div slot="extra">
                        <a href="#">删除</a>
                        <a href="#">修改</a>
                    </div>
                    <div>
                        <p><b>地址:</b>{{item.p}}{{item.c}}{{item.a}}{{item.s}}{{item.d}}</p>
                        <p><b>收件人:</b>{{item.n}}</p>
                        <p><b>手机号:</b>{{item.tel}}</p>
                    </div>
                </Card>
            </i-col>
            <i-col span="6">
                <Card class="card">
                    <div class="jiahao"></div>
                </Card>
            </i-col>
        </Row>
        <!-- 增加收货地址模态框 -->
        <Modal v-model="isShowModal" title="增加收货地址" @on-ok="isShowModal = false" @on-cancel="isShowModal = false" width="600">
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
                isShowModal: true
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshanwin').then(data => {
                this.arr = data.data;
            })
        },
        components:{
            ModalInn
        }
    }
</script>

<style lang="less">
    .card {
        height: 160px;
        position: relative;
        .jiahao {
            background: url(/images/jiahao1.svg);
            background-size: cover;
            width: 100px;
            height: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -50px;
            margin-top: -50px;
            cursor: pointer;
            &:hover {
                background: url(/images/jiahao2.svg);
            }
        }
    }
</style>