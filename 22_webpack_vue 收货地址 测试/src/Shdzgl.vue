<template>
    <div class="wrap">
        <Row :gutter="16">
            <i-col span="6" v-for="(item,index) in arr" :key="index">
                <Card>
                    <div slot="title"><b>{{item.alias}}</b></div>
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
            <i-col span="6">
                <Card class="p1">
                    <div class="jiahao" @click="isShowModalInn = true"></div>
                </Card>
            </i-col>
        </Row>

        <!-- 模态框 -->
        <Modal v-model="isShowModalInn" title="增加收货地址" width="600" @on-ok="isShowModalInn = false" @on-cancel="isShowModalInn = false">
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
                isShowModalInn:true
            }
        },
        components: {
            ModalInn
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshanwin').then(data => {
                this.arr = data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .wrap {
        .p1 {
            height: 160px;
            position: relative;
            .jiahao {
                position: absolute;
                background: url(/images/jiahao1.svg);
                width: 100px;
                height: 100px;
                top: 50%;
                left: 50%;
                margin-top: -50px;
                margin-left: -50px;
                cursor: pointer;
                background-size: cover;
                &:hover {
                    background: url(/images/jiahao2.svg);
                }
            }
        }
    }
</style>