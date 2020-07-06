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
                        <p><b>地址：</b>{{item.p}}{{item.c}}{{item.a}}{{item.s}}{{item.d}}</p>
                        <p><b>收件人：</b>{{item.n}}</p>
                        <p><b>手机号：</b>{{item.tel}}</p>
                    </div>
                </Card>
            </i-col>
            <i-col span="6" v-if="arr.length != 4">
                <Card class="jia_box">
                    <div class="jiahao"></div>
                </Card>
            </i-col>
        </Row>
        <!-- 模态框 -->
        <Modal v-model="isShowModal" title="增加收货地址" width="600">
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
                // 读取收货地址信息
                arr: [],
                // 是否显示模态框
                isShowModal: true,
            }
        },
        components: {
            ModalInn
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshanwin1').then(data => {
                this.arr = data.data
            })
        }
    };
</script>

<style lang="less" scoped>
    .jia_box {
        position: relative;
        height: 160px;
        .jiahao {
            position: absolute;
            top: 50%;
            left: 50%;
            background-image: url(/images/jiahao1.svg);
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
            background-size: cover;
            cursor: pointer;
            &:hover {
                background-image: url(/images/jiahao2.svg);
            }
        }
    }
    
</style>