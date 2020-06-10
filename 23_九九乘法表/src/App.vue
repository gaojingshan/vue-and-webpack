<template>
    <div class="wrap">
        <h1>iviewui组件</h1>
        <!-- 日期选择器 -->
        <DatePicker />
        <!-- 表格 columns表示列 data表示数据 -->
        <Table :columns="columns" :data="tabledata"></Table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [{
                        title: "姓名",
                        key: "name"
                    },
                    {
                        title: "年龄",
                        key: "age"
                    },
                    {
                        title: "性别",
                        key: "sex"
                    }
                ],
                tabledata: [{
                        name: '小明',
                        age: 22,
                        sex: '男',
                        mathscore: 94
                    },
                    {
                        name: '小红',
                        age: 25,
                        sex: '女',
                        mathscore: 99
                    },
                    {
                        name: '小强',
                        age: 22,
                        sex: '男',
                        mathscore: 94
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrap {
        width: 800px;
        margin: 40px auto;
    }
</style>