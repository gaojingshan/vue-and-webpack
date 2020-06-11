<template>
    <div class="wrap">
        <Row :gutter="16">
            <i-col span="6" v-for="(item,index) in obj" :key="index">
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
            <i-col span="6" v-if="obj.length != 4">
                <Card class="card">
                    <span>+</span>
                </Card>
            </i-col>
        </Row>
        <!-- 模态框 -->
        <Modal v-model="isShowModal" title="增加收货地址">
            <ModalInn />
            
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import ModalInn from './components/ModalInn.vue';
    export default {
        data() {
            return {
                obj: {},
                // 是否显示模态框
                isShowModal: true,
                
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshanbeautiful').then(data => {
                // console.log(data.data);
                this.obj = data.data;
            })
        },
        components:{
            ModalInn
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