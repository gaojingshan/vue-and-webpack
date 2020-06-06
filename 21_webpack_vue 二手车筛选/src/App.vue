<template>
    <div class="wrap">
        <h3>二手车大全</h3>
        <!-- 品牌 -->
        <p class="pGrid">
            <!-- <input type="checkbox" :value="item" v-model="brand"> -->
            <RadioGroup v-model="all.brand">
                <Radio label="item" v-for="(item, index) in all.brand" :key="index">
                    {{item}}
                </Radio>
            </RadioGroup>
        </p>
        <!-- 颜色 -->
        <p class="pGrid">
            <label v-for="(item, index) in all.color" :key="index">
                        <input type="checkbox" v-model="color" :value="item" >
                        {{item}}
                    </label>
        </p>
        <p>查询到<span>{{total}}</span>条相关车辆</p>
        <Table border :columns="columns" :data="cardata"></Table>
        <p class="pageP">
            <Page :total="total" :current="current" :page-size="10" @on-change="changeHan" />
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created() {
            this.loadData();
            // 品牌
            axios.get('http://www.aiqianduan.com:56506/allbs').then(data => {
                // console.log(data.data);
                for (var zimu in data.data) {
                    var o = data.data[zimu];
                    for (var pinpai in o) {
                        // console.log(o[pinpai]);
                        this.all.brand.push(pinpai)
                    }
                }
                console.log(this.all.brand);
            })
        },
        data() {
            return {
                total: 0,
                current: 1,
                columns: [{
                        title: '图片',
                        key: 'img',
                        width: 180,
                        render(h, {
                            row
                        }) {
                            return h('div', [
                                h('img', {
                                    attrs: {
                                        src: `http://aiqianduan.com:56506/images/carimages_small/${row.id}/view/${row.img}`
                                    }
                                })
                            ])
                        }
                    },
                    {
                        title: '编号',
                        key: 'id'
                    },
                    {
                        title: '品牌',
                        key: 'brand'
                    },
                    {
                        title: '车系',
                        key: 'series'
                    },
                    {
                        title: '颜色',
                        key: 'color'
                    },
                    {
                        title: '排量',
                        key: 'engine'
                    },
                    {
                        title: '尾气',
                        key: 'exhaust'
                    },
                    {
                        title: '燃料',
                        key: 'fuel'
                    }
                ],
                cardata: [],
                all: {
                    color: ['红', '橙', '黄', '绿', '青', '蓝', '紫', '灰'],
                    brand: [],
                },
                // 选中的
                color: ['红', '黄'],
                brand: '宝马'
            }
        },
        methods: {
            // 点击分页的时候
            changeHan(current) {
                this.current = current;
                this.loadData();
            },
            // 拉取Ajax封装为函数
            loadData() {
                axios.get('http://www.aiqianduan.com:56506/cars?page=' + this.current + '&color=' + this.color.join('v') + '&brand=' + this.brand).then(data => {
                    this.cardata = data.data.results;
                    this.total = data.data.total;
                })
            }
        },
        // 检测
        watch: {
            color() {
                this.current = 1;
                this.loadData()
            },
            brand() {
                this.current = 1;
                this.loadData()
            }
        }
    }
</script>


<style lang="less">
    // style 标签上的 scoped 删除，就可以修改组件的样式了。
    .wrap {
        width: 1000px;
        margin: 40px auto;
        .pGrid {
            margin-top: 20px;
        }
        h3 {
            text-align: center;
            font-size: 30px;
            color: rgb(247, 155, 36);
        }
        .pageP {
            margin-top: 20px;
        }
        &>p {
            margin: 10px 0;
        }
        p>span {
            color: red;
        }
    }
    .ivu-table-header thead tr th,
    .ivu-table-border td,
    .ivu-table-border th {
        text-align: center;
    }
</style>