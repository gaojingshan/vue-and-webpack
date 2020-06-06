<template>
    <div class="wrap">
        <h1>二手车大全</h1>
        <!-- 表格 columns表示列 data表示数据 -->
        <Table :columns="columns" :data="tabledata"></Table>
        <div class="pagebox">
            <Page :total="total" :page-size="10" :current="current" @on-change="changePage" />
        </div>
    </div>
</template>

<script>
    // 这个包专门用来拉Ajax的
    import axios from 'axios';
    export default {
        // 生命周期，组件创建成功
        created() {
            // 在生命周期中，调用loadData函数
            this.loadData()
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
                    },
                ],
                tabledata: []
            }
        },
        methods: {
            changePage(current) {
                // 先改变current属性值
                this.current = current;
                // 然后调用拉取数据
                this.loadData()
            },
            // 提炼成函数
            loadData() {
                // 书写Ajax代码，拉取默认数据
                axios.get('http://www.aiqianduan.com:56506/cars?page=' + this.current).then(data => {
                    // 回调函数，要把服务器返回的数据设置为data中的tabledata
                    // 两个data是固定写法，因为data中还封装了服务器的一些其他信息，data.data是返回的信息
                    this.tabledata = data.data.results;
                    // 把total替换掉
                    this.total = data.data.total
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrap {
        width: 800px;
        margin: 40px auto;
        h1 {
            text-align: center;
            color: deeppink;
            line-height: 40px;
        }
        .pagebox {
            padding-top: 20px;
        }
    }
</style>