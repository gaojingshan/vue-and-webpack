<template>
    <div class="wrap">
        <Row :gutter="16">
            <i-col :span="6" v-for="(item, index) in arr" :key="index">
                <Card>
                    <div slot="title">
                        <b>{{item.alias}}</b>
                    </div>
                    <div slot="extra">
                        <a href="javascript:;">删除</a>
                        <a href="javascript:;">修改</a>
                    </div>
                    <div>
                        <p><b>地址：</b>{{item.p}}{{item.c}}{{item.a}}{{item.s}}{{item.d}}</p>
                        <p><b>收件人：</b>{{item.n}}</p>
                        <p><b>手机号：</b>{{item.tel}}</p>
                    </div>
                </Card>
            </i-col>
            <i-col :span="6" v-if="arr.length != 4">
                <Card class="p1">
                    <div class="jiahao" @click="isShowModal = true"></div>
                </Card>
            </i-col>
        </Row>
        <!-- 模态框 -->
        <Modal v-model="isShowModal" :loading="true" width="700" title="增加收货地址" @on-cancel="isShowModal = false">
            <ModalInn ref="modalinn" @updated="loading = false" />
            <div slot="footer">
                <Button @click="modalCancelHan">取消</Button>
                <Button type="primary" @click="modalOkHan">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import ModalInn from './components/ModalInn.vue'
    export default {
        data() {
            return {
                arr: [],
                // 是否显示弹出层
                isShowModal: false,
            }
        },
        components: {
            ModalInn
        },
        // 生命周期
        created() {
            // 请求数据
            this.loadData();
        },
        methods: {
            loadData() {
                this.arr = [];
                // 请求服务器数据
                axios.get('http://www.aiqianduan.com:56506/shdz/shanshan').then(data => {
                    this.arr = data.data
                })
            },
            // 当点击模态框的确定按钮做的事情
            modalOkHan() {
                // 检验整个表格  validate 验证的意思
                // 这里回调的data值，就是表单是否无错，true表示无错，false表示有错
                this.$refs.modalinn.$refs.myform.validate((data) => {
                    if (data) {
                        // 如果没有错误，提炼数据、关闭模态框、上传
                        const {
                            n,
                            tel,
                            alias,
                            d
                        } = this.$refs.modalinn.myform;
                        const {
                            p,
                            c,
                            a,
                            s
                        } = this.$refs.modalinn;
                        // 显示顶部加载进度条
                        this.$Loading.start();
                        // 添加数据
                        axios.post('http://www.aiqianduan.com:56506/shdz/shanshan', {
                            // k-v一致，省略v
                            p,
                            c,
                            a,
                            s,
                            d,
                            n,
                            alias,
                            tel
                        }).then(data => {
                            console.log(data.data);
                            this.isShowModal = false;
                            if (data.data == '添加成功') {
                                this.$Message.success('成功添加了一个地址');
                                // 更新页面
                                this.loadData();
                            } else {
                                this.$Message.error('没有成功添加地址，请联系管理员');
                            }
                        })
                    }
                });
            },
            // 点击取消
            modalCancelHan() {}
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
                left: 50%;
                top: 50%;
                margin-left: -50px;
                margin-top: -50px;
                width: 100px;
                height: 100px;
                background: url(/images/jiahao1.svg);
                background-size: cover;
                cursor: pointer;
                &:hover {
                    background: url(/images/jiahao2.svg);
                }
            }
        }
    }
</style>