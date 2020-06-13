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
                        <p><b>姓名：</b>{{item.n}}</p>
                        <p><b>电话：</b>{{item.tel}}</p>
                    </div>
                </Card>
            </i-col>
            <i-col span="6" v-if="arr.length != 4">
                <Card class="card">
                    <span @click="isShowModal = true">+</span>
                </Card>
            </i-col>
        </Row>
        <!-- 模态框 -->
        <Modal :value="isShowModal" :loading="true" title="增加收货地址">
            <ModalInn ref="modalinn" @updated="loading=false" />
            <div slot="footer">
                <Button>取消</Button>
                <Button type="primary" @click="onOk">确定</Button>
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
                arr: [],
                // 是否显示模态框
                isShowModal: true,
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshanbeautiful').then(data => {
                // console.log(data.data);
                this.arr = data.data;
            })
        },
        components: {
            ModalInn
        },
        methods: {
            onOk() {
                this.$refs.modalinn.$refs.formValidate.validate(data => {
                    if (data) {
                        const {
                            n,
                            tel,
                            alias,
                            d
                        } = this.$refs.modalinn.formValidate;
                        const {
                            p,
                            c,
                            a,
                            s
                        } = this.$refs.modalinn;
                        this.isShowModal = false;

                        axios.post('http://www.aiqianduan.com:56506/shdz/shanshanbeautiful',{
                            p,
                            c,
                            a,
                            s,
                            d,
                            n,
                            alias,
                            tel
                        }).then(data=>{
                            alert(data.data)
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