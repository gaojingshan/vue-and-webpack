<template>
    <div>
        <Row>
            <i-col :span="7">
                <div class="list">
                    <ul>
                        <li v-for="item in dataArr" :key="item.name" @click="liClickHan(item)" :class="{'cur' : nowname == item.name}">
                            <b>{{item.name}}</b>
                            <i>{{item.address}}</i>
                        </li>
                    </ul>
                </div>
            </i-col>
            <i-col :span="12">
                <div id="map-container"></div>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        props: ["p", "c"],
        // 当组件的DOM已经全部加载完毕
        // created表示组件数据已经筹备好，但是DOM没有准备好。
        // 要用mounted表示组件的DOM也准备好了。
        mounted() {
            // 动态创建一个script代码，引入的js不是CMD规范的（不符合exports、require形式的）
            var oS = document.createElement('script');
            oS.src = 'https://webapi.amap.com/maps?v=1.4.15&key=0b27dd05e242ccf60286a5afab89c4d2';
            document.body.appendChild(oS);
            oS.onload = oS.onreadystatechange = () => {
                // 检查script是否加载好
                if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'Complete') {
                    // 拉数据，接口有问题，接口不是“北京市市辖区”，“黑龙江省哈尔滨市”，而是“北京”，“哈尔滨”
                    // 解决方法:if语句
                    if (this.p == "北京市" && this.c == "市辖区") {
                        var city = "北京";
                    } else if (this.p == "上海市" && this.c == "市辖区") {
                        var city = "上海";
                    } else if (this.p == "黑龙江省" && this.c == "哈尔滨市") {
                        var city = "哈尔滨";
                    }
                    axios
                        .get("http://www.aiqianduan.com:56506/zhaohang?city=" + city)
                        .then(data => {
                            console.log(data.data);
                            this.dataArr = data.data;
                            // 新建一个地图
                            this.map = new AMap.Map('map-container', {
                                resizeEnable: true, //是否监控地图容器尺寸变化
                                zoom: 11, //初始化地图层级
                                center: [data.data[0].lng, data.data[0].lat] //初始化地图中心点
                            });
                            // 循环扎针（点标记）
                            for (let i = 0; i < data.data.length; i++) {
                                // 创建一个 Marker 实例：
                                let marker = new AMap.Marker({
                                    // icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
                                    position: new AMap.LngLat(data.data[i].lng, data.data[i].lat),
                                });
                                // 将创建的点标记添加到已有的地图实例：
                                this.map.add(marker);
                            }
                        });
                }
            }
        },
        data() {
            return {
                // 当前城市招商银行网点
                dataArr: [],
                // 当前选择的是哪个地址的名字
                nowname: ''
            };
        },
        created() {},
        methods: {
            // 点击左侧li
            liClickHan(item) {
                this.nowname = item.name
            }
        }
    };
</script>

<style lang="less" scoped>
    #map-container {
        width: 400px;
        height: 300px;
        border: 1px solid #000;
    }
    .list {
        height: 300px;
        overflow-y: scroll;
        ul {
            list-style: none;
            li {
                border: 1px solid #eee;
                padding: 4px 0;
                cursor: pointer;
                &:hover {
                    background-color: rgb(255, 246, 197);
                }
                &.cur {
                    background-color: rgb(255, 246, 197);
                }
                b {
                    display: block;
                }
                i {
                    display: block;
                }
            }
        }
    }
</style>