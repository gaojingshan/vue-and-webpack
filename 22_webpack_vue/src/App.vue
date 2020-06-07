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
        <Modal v-model="isShowModal" width="500" title="增加收获地址">
            <p>
                <b>请选择省市县镇</b>
                <Dropdown trigger="custom" placement="bottom-start" :visible="isShowDropDown" style="margin-left: 20px">
                    <a href="javascript:void(0)" @click="isShowDropDown = true">
                            请选择省市县镇
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                    <DropdownMenu slot="list">
                        <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" @click="isShowDropDown = false">确定</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </p>
        </Modal>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                arr: [],
                // 是否显示弹出层
                isShowModal: true,
                // 是否显示出菜单
                isShowDropDown: true
            }
        },
        created() {
            // 请求服务器数据
            axios.get('http://www.aiqianduan.com:56506/shdz/shanshan').then(data => {
                this.arr = data.data
            })
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
</style>