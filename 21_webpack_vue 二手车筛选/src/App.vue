<template>
    <div class="wrap">
        <h3>二手车大全</h3>
        <!-- 品牌 -->
        <p class="pGrid">
            <!-- <input type="checkbox" :value="item" v-model="brand"> -->
            <RadioGroup v-model="brand">
                <Radio :label="item" v-for="(item, index) in all.brand" :key="index">
                    {{item}}
                </Radio>
            </RadioGroup>
        </p>
        <!-- 颜色 -->
        <p class="pGrid">
            <CheckboxGroup v-model="color">
                <Checkbox v-for="(item, index) in all.color" :key="index" :label="item">
                    {{item}}
                </Checkbox>
            </CheckboxGroup>
        </p>
        <p>查询到<span>{{total}}</span>条相关车辆</p>
        <!-- 表格 columns表示列 data表示数据 -->
        <Table border :columns="columns" :data="cardata"></Table>
        <p class="pageP">
            <Page :total="total" :current="current" :page-size="10" @on-change="changeHan" />
        </p>
    </div>
</template>

<script>
    // 这个包专门用来拉Ajax的
    import axios from 'axios';
    export default {
        // 生命周期，组件创建成功
        created() {
            // 在生命周期中，调用loadData函数
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
                // console.log(this.all.brand);
            })
        },
        data() {
            return {
                 // 车辆总数
                total: 0,
                // 当前第几页
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
                // 罗列所有的筛选
                all: {
                    color: ['红', '橙', '黄', '绿', '青', '蓝', '紫', '灰'],
                    brand: [],
                },
                // 选中的
                color: [],
                brand: ''
            }
        },
        methods: {
            // 点击分页的时候
            changeHan(current) {
                // 先改变current属性值
                this.current = current;
                // 然后调用拉取数据
                this.loadData();
            },
            // 提炼成函数
            loadData() {
                // 书写Ajax代码，拉取默认数据
                axios.get('http://www.aiqianduan.com:56506/cars?page=' + this.current + '&color=' + this.color.join('v') + '&brand=' + this.brand).then(data => {
                    // 回调函数，要把服务器返回的数据设置为data中的cardata
                    // 两个data是固定写法，因为data中还封装了服务器的一些其他信息，data.data是返回的信息
                    this.cardata = data.data.results;
                    // 把total替换掉
                    this.total = data.data.total;
                })
            }
        },
        // 监控
        watch: {
            // 监控color变化，函数名是什么，就表示监控什么
            color() {
                // 当color变化了，就拉取数据,并且要变为第1页
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