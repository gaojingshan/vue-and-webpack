<template>
    <div>
        我是菜鸟弹出层
        {{dataArr}}
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        props: ['p', 'c'],
        data(){
            return{
                // 当前城市招商银行网点
                dataArr:[]
            }
        },
        created() {
            // 拉数据，接口有问题，接口不是“北京市市辖区”，“黑龙江省哈尔滨市”，而是“北京”，“哈尔滨”
            // 解决方法:if语句
            if (this.p == '北京市' && this.c == '市辖区') {
                var city = '北京';
            } else if (this.p == '上海市' && this.c == '市辖区') {
                var city = '上海';
            } else if (this.p == '黑龙江省' && this.c == '哈尔滨市') {
                var city = '哈尔滨';
            }
            axios.get('http://www.aiqianduan.com:56506/zhaohang?city='+city).then(data=>{
                console.log(data.data);
                this.dataArr=data.data
                
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>