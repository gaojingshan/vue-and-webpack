<template>
    <div>
        <div class="nav">
            <ul>
                <li>
                    <label v-for="item in hero" :key="item">
                <input type="radio" name="职业" :value="item" v-model="now" />
                {{item}}
              </label>
                </li>
            </ul>
        </div>
        <div class="box">
            <ul>
                <li v-for="item in arr" :key="item.cname" :class="{'cur' : now == '全部' || item.hero_type == now || item.hero_type2 == now}">
                    <img :src="`http://www.aiqianduan.com:56506/images/wzry/${item.pic}.jpg`" alt />
                    <p>{{item.cname}}</p>
                    <p>{{item.title}}</p>
                    <!-- <div class="mask" v-if=" now!='全部' && item.hero_type != now && item.hero_type2 != now"></div> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                arr: [],
                hero: ["全部", "射手", "法师", "坦克", "刺客", "辅助"],
                now: "全部"
            };
        },
        created() {
            axios.get("http://www.aiqianduan.com:56506/wzry").then(data => {
                this.arr = data.data;
            });
        }
    };
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    .box {
        ul {
            list-style: none;
            li {
                float: left;
                width: 70px;
                height: 114px;
                border: 1px solid #000;
                margin-right: 10px;
                margin-bottom: 10px;
                position: relative;
                img {
                    width: 70px;
                }
                p {
                    font-size: 12px;
                    line-height: 20px;
                    text-align: center;
                }
                // .mask {
                //     position: absolute;
                //     top: 0;
                //     left: 0;
                //     width: 70px;
                //     height: 114px;
                //     background: rgba(255, 255, 255, 0.8);
                // }
                &.cur::before{
                    opacity: 0;
                }
                 &::before{
                     content:'';
                     position: absolute;
                     top: 0;
                     left: 0;
                     width: 100%;
                     height: 100%;
                    background: rgba(255, 255, 255, 0.6);
                 }
            }
        }
    }
</style>