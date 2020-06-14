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
            <i-col span="6" v-if="arr.length != 4">
                <Card class="cardSpan">
                    <span @click="isShowModal = true">+</span>
                </Card>
            </i-col>
        </Row>
        <!-- Modal -->
        <Modal v-model="isShowModal" title="增加收货地址">
            <ModalInn ref="modalinn" />
            <!-- 自己做确定取消按钮 -->
            <div slot="footer">
                <Button>取消</Button>
                <Button type="primary" @click="okHan">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import ModalInn from './components/ModalInn.vue';
    export default {
        data() {
            return {
                // 接口返回的收货地址信息的数组
                arr: [],
                // 是否显示模态框
                isShowModal: false,
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshansmart').then(data => {
                console.log(data.data);
                this.arr = data.data;
            })
        },
        components: {
            ModalInn
        },
        methods: {
            // 点击确定按钮校验全表
            okHan() {
                this.$refs.modalinn.$refs.myform.validate(data => {
                    if (data) {
                        const {
                            p,
                            c,
                            a,
                            s,
                        } = this.$refs.modalinn;
                        const {
                            pcas,
                            d,
                            tel,
                            n,
                            alias,
                        } = this.$refs.modalinn.myform;
                        // 添加数据
                        axios.post('http://www.aiqianduan.com:56506/shdz/shanshansmart', {
                            p,
                            c,
                            a,
                            s,
                            pcas,
                            d,
                            tel,
                            n,
                            alias,
                        }).then(data => {
                            alert(data.data)   ;
                            this.isShowModal=false                         
                        })
                    }
                })
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
</style>