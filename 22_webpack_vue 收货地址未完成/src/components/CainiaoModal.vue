<template>
    <div>
        <Row :gutter="16">
            <i-col :span="9">
                <div>
                    <i-input style="margin-bottom:10px" v-model="keyword" />
                </div>
                <div class="list">
                    <ul>
                        <li v-for="item in filteredArr" :key="item.name" @click="liClickHan(item)" :class="{'cur' : nowitem != null && nowitem.name == item.name}">
                            <b>{{item.name}}</b>
                            <i>{{item.address}}</i>
                            <u @click.stop="delChoose">删除选择</u>
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
                            // console.log(data.data);
                            this.dataArr = data.data;
                            // 新建一个地图
                            this.map = new AMap.Map('map-container', {
                                resizeEnable: true, //是否监控地图容器尺寸变化
                                zoom: 12, //初始化地图层级
                                center: [data.data[0].lng, data.data[0].lat] //初始化地图中心点
                            });
                            // 扎针数组
                            this.markerArr = [];
                            // 循环扎针（点标记）
                            for (let i = 0; i < data.data.length; i++) {
                                // 创建一个 Marker 实例：
                                let marker = new AMap.Marker({
                                    // icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
                                    position: new AMap.LngLat(data.data[i].lng, data.data[i].lat),
                                });
                                // 将创建的点标记添加到已有的地图实例：
                                this.map.add(marker);
                                // 推入到markerArr数组中
                                this.markerArr.push(marker);
                            }
                        });
                }
            }
        },
        data() {
            return {
                // 当前城市招商银行网点
                dataArr: [],
                // 当前选择的是哪个地址
                nowitem: null,
                // 搜索关键字
                keyword: ''
            };
        },
        methods: {
            // 点击左侧li
            liClickHan(item) {
                this.nowitem = item;
                // 让地图聚焦  设置地图中心点
                this.map.setCenter(new AMap.LngLat(item.lng, item.lat));
                // 聚焦级别设置大点
                this.map.setZoom(14);
                // 清除所有扎针
                this.map.remove(this.markerArr);
                // 重新扎一个针
                // 创建一个 Marker 实例：
                let marker = new AMap.Marker({
                    position: new AMap.LngLat(item.lng, item.lat),
                    icon: "http://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
                });
                // 将创建的点标记添加到已有的地图实例：
                this.map.add(marker);
                // 推入到markerArr数组中
                this.markerArr.push(marker);
            },
            // 删除选择，恢复全部标记
            delChoose() {
                this.nowitem = null;
                // 清除所有扎针
                this.map.remove(this.markerArr);
                // 循环扎针（点标记）
                for (let i = 0; i < this.dataArr.length; i++) {
                    // 创建一个 Marker 实例：
                    let marker = new AMap.Marker({
                        // icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
                        position: new AMap.LngLat(this.dataArr[i].lng, this.dataArr[i].lat),
                    });
                    // 将创建的点标记添加到已有的地图实例：
                    this.map.add(marker);
                    // 推入到markerArr数组中
                    this.markerArr.push(marker);
                }
                // 调整聚焦，聚焦级别设置小点
                this.map.setZoom(11);
            }
        },
        // 计算之后的值
        computed: {
            filteredArr() {
                // 过滤只含有关键字的名称或地址
                return this.dataArr.filter(item => item.name.includes(this.keyword) || item.address.includes(this.keyword))
            }
        }
    };
</script>

<style lang="less" scoped>
    #map-container {
        width: 400px;
        height: 300px;
        border: 1px solid #eee;
    }
    .list {
        height: 260px;
        overflow-y: scroll;
        ul {
            list-style: none;
            li {
                border: 1px solid #eee;
                padding: 4px 0;
                cursor: pointer;
                position: relative;
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
                u {
                    position: absolute;
                    right: 10px;
                    top: 4px;
                    color: red;
                    text-decoration: underline;
                    display: none;
                } // 用CSS决定u的显示与隐藏
                &.cur u {
                    display: block;
                }
            }
        }
    }
</style>