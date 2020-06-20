<template>
    <div>
        <div class="wrap">
            <div class="left">
                <!-- v-if="arr.length > 0" 防止arr为空数组的时候报错 -->
                <img v-if="arr.length > 0" :src="`http://www.aiqianduan.com:56506/images/mingxing/${arr[now].pic}`" alt="">
            </div>
            <div class="right" v-if="arr.length > 0">
                <h3>{{arr[now].name}}</h3>
                <p>代表作:</p>
                <ul>
                    <li v-for="item in arr[now].works" :key="item">{{item}}</li>
                </ul>
                <div class="btn" :class="like.includes(now) ? 'typea' : 'typeb'" @click="likeHan">
                    {{like.includes(now) ? '你已经喜欢她了，点击取消喜欢' : '点我喜欢她'}}
                </div>
            </div>
            <div class="bottom">
                <ul>
                    <li v-for="(item, index) in arr" :key="item.name" :style="{'background-image':`url(http://www.aiqianduan.com:56506/images/mingxing/${item.pic})`}" :class="{'cur' : now == index}" @mouseenter="now = index">
                        <span v-show="like.includes(index)">喜欢</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                arr: [],
                now: 3,
                like: [0, 1, 3]
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/mingxing').then(data => {
                this.arr = data.data;
                console.log(this.arr);
            })
        },
        methods: {
            likeHan() {
                if (this.like.includes(this.now)) {
                    this.like = this.like.filter(item => item != this.now)
                } else {
                    if (this.like.length < 3) {
                        this.like.push(this.now)
                    } else {
                        alert('只能喜欢三个哦')
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrap {
        width: 800px;
        height: 500px;
        margin: 40px auto;
        border: 1px solid #000;
        position: relative;
        .left {
            float: left;
            margin-right: 10px;
        }
        .right {
            float: left;
            .btn {
                width: 200px;
                height: 40px;
                border: 1px solid #eee;
                color: white;
                text-align: center;
                border-radius: 10px;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
                cursor: pointer;
                &.typea {
                    background: -webkit-linear-gradient(top, blue, skyblue);
                }
                &.typeb {
                    background: -webkit-linear-gradient(top, orange, gold);
                }
            }
        }
        .bottom {
            position: absolute;
            bottom: 0;
            ul {
                list-style: none;
                li {
                    float: left;
                    width: 60px;
                    height: 60px;
                    border: 1px solid #eee;
                    margin-right: 10px;
                    border-radius: 50%;
                    background-size: cover;
                    position: relative;
                    &.cur {
                        border: 2px solid red;
                    }
                    span {
                        position: absolute;
                        width: 40px;
                        height: 16px;
                        background-color: #f38;
                        color: white;
                        right: -10px;
                        font-size: 10px;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>