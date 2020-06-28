<template>
    <div class="wrap">
        <Row :gutter="16">
            <i-col span="6" v-for="(item,index) in arr" :key="index">
                <Card>
                    <div slot="title">
                        <b>{{item.alias}}</b>
                    </div>
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
            <i-col span="6" v-if="arr.length != 4">
                <Card class="p1">
                    <div class="jiahao" @click="isShowModalInn = true"></div>
                </Card>
            </i-col>
        </Row>
        <!-- 模态框 -->
        <Modal v-model="isShowModalInn" :loading="true" title="增加收货地址" width="600">
            <ModalInn ref="modalinn" @updated="loading = false" />
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
                // 是否显示弹出层
                isShowModalInn: true
            }
        },
        components: {
            ModalInn
        },
        // 生命周期
        created() {
            // 请求服务器数据
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshanwin').then(data => {
                this.arr = data.data;
            })
        },
        methods: {
            // 当点击模态框的确定按钮做的事情
            okHan() {
                // 校验整个表格  validate 验证的意思
                // 这里回调的data值，就是表单是否无错，true表示无错，false表示有错
                this.$refs.modalinn.$refs.myform.validate((data) => {
                    if (data) {
                        // 如果没有错误，提炼数据、关闭模态框、上传
                        const {
                            d,
                            tel,
                            n,
                            alias,
                        } = this.$refs.modalinn.myform;
                        const {
                            p,
                            c,
                            a,
                            s,
                        } = this.$refs.modalinn;
                        this.isShowModalInn = false;
                        // 添加数据
                        // axios.post('http://www.aiqianduan.com:56506/shdz/shanshanwin', {
                        //     // k,v一致，省略v
                        //     p,
                        //     c,
                        //     a,
                        //     s,
                        //     d,
                        //     tel,
                        //     n,
                        //     alias
                        // }).then(data => {
                        //     alert(data.data)
                        // })
                    }
                })
            }
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