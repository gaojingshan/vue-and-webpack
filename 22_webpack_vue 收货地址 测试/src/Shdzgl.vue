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
            <!-- v-if="arr.length != 4" -->
            <i-col span="6" >
                <Card class="card">
                    <div class="jiahao" @click="isShowModal = true"></div>
                </Card>
            </i-col>
        </Row>
        <!-- 增加收货地址模态框 -->
        <Modal v-model="isShowModal" title="增加收货地址" width="600">
            <ModalInn ref="modalinn" />
            <div slot="footer">
                <Button>取消</Button>
                <Button type="primary" @click="okHan">确定</Button>
            </div>
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
        components: {
            ModalInn
        },
        methods: {
            // 点击确定按钮
            okHan() {
                this.$refs.modalinn.$refs.myform.validate(data => {
                    if (data) {
                        const {
                            p,
                            c,
                            a,
                            s
                        } = this.$refs.modalinn
                        const {
                            d,
                            tel,
                            n,
                            alias
                        } = this.$refs.modalinn.myform
                        // axios.post('http://www.aiqianduan.com:56506/shdz/shanshanwin', {
                        //     p,
                        //     c,
                        //     a,
                        //     s,
                        //     d,
                        //     n,
                        //     tel,
                        //     alias
                        // }).then(data => {
                        //     alert(data.data)
                        // })
                        this.isShowModal=false
                    }
                })
            }
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