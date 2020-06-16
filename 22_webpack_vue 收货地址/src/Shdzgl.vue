<template>
    <div class="wrap">
        <!-- <Row>
                    <i-col span="6">
                        <h1>你好</h1>
                    </i-col>
                    <i-col span="6">
                        <h1>你好</h1>
                    </i-col>
                    <i-col span="6">
                        <h1>你好</h1>
                    </i-col>
                    <i-col span="6">
                        <h1>你好</h1>
                    </i-col>
                </Row> -->
        <Row :gutter="16">
            <i-col :span="6" v-for="(item, index) in arr" :key="index">
                <Card>
                    <div slot="title">
                        <b>{{item.alias}}</b>
                    </div>
                    <div slot="extra">
                        <a href="">删除</a>
                        <a href="">修改</a>
                    </div>
                    <div>
                        <p><b>地址：</b>{{item.p}}{{item.c}}{{item.a}}{{item.s}}{{item.d}}</p>
                        <p><b>收件人：</b>{{item.n}}</p>
                        <p><b>手机号：</b>{{item.tel}}</p>
                    </div>
                </Card>
            </i-col>
            <!-- v-if="arr.length != 4" -->
            <i-col :span="6">
                <Card class="p1" style="position: relative">
                    <span class="plusspan" @click="isShowModal = true">
                            <div class="jiahao"></div>
                        </span>
                </Card>
            </i-col>
        </Row>
        <!-- 模态框 -->
        <Modal :value="isShowModal" :loading="true" width="600" title="增加收货地址">
            <ModalInn ref="modalinn" @updated="loading = false" />
            <div slot="footer">
                <Button>取消</Button>
                <Button type="primary" @click="okHan">确定</Button>
            </div>
        </Modal>
        <Spin></Spin>
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
                isShowModal: true,
            }
        },
        components: {
            ModalInn
        },
        // 生命周期
        created() {
            // 请求服务器数据
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshan').then(data => {
                this.arr = data.data
            })
        },
        methods: {
            // 当点击模态框的确定按钮做的事情
            okHan() {
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
                        this.isShowModal = false;
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
                            alert(data.data)
                        })
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrap {
        // width: 1000px;
        // margin: 40px auto;
        .p1 {
            text-align: center;
            height: 160px;
            font-size: 100px;
            line-height: 160px;
            .plusspan {
                cursor: pointer; // 当它自己被触摸，一定要加上一个&符号，如果不加直接写:hover是不对的
                &:hover {
                    color: orange;
                }
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
                    &:hover {
                        background: url(/images/jiahao2.svg);
                    }
                }
            }
        }
    }
    .dropdowninnerbox {
        height: 150px;
    }
</style>