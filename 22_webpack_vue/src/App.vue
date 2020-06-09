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
                        <p><b>姓名:</b>{{item.n}}</p>
                        <p><b>电话：{{item.tel}}</b></p>
                    </div>
                </Card>
            </i-col>
            <i-col :span="6" v-if="arr.length != 4">
                <Card class="p1">
                    <span class="plusspan" @click="isShowModal = true">+</span>
                </Card>
            </i-col>
        </Row>
        <!-- 模态框 -->
        <Modal :value="isShowModal" :loading="true" width="600" title="增加收获地址" @on-ok="okHan">
            <ModalInn ref="modalinn" />
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
                isShowModal: true,
            }
        },
        components: {
            ModalInn
        },
        created() {
            // 请求服务器数据
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshan').then(data => {
                this.arr = data.data
            })
        },
        methods: {
            // 当点击模态框的确定按钮做的事情
            okHan() {
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
                // 检验整个表格  validate 验证的意思
                if (this.$refs.modalinn.$refs.myform.validate()){
                    
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrap {
        width: 1000px;
        margin: 40px auto;
        .p1 {
            text-align: center;
            height: 160px;
            font-size: 100px;
            line-height: 120px;
            .plusspan {
                cursor: pointer; // 当它自己被触摸，一定要加上一个&符号，如果不加直接写:hover是不对的
                &:hover {
                    color: orange;
                }
            }
        }
    }
    .dropdowninnerbox {
        height: 150px;
    }
</style>