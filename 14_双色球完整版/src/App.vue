<template>
    <div>
        <ul class="redbox">
            <li v-for="i in 33" :key="i" @click="redHan(i)" :class="{'cur' : redArr.includes(i)}">{{i}}</li>
        </ul>
        <ul class="bluebox">
            <li v-for="i in 16" :key="i" @click="blueHan(i)" :class="{'cur':i == blue}">{{i}}</li>
        </ul>
        <button @click="suiji">随机</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                redArr: [],
                blue: 0
            }
        },
        methods: {
            // 点击红球
            redHan(i) {
                if (this.redArr.includes(i)) {
                    // 删除。filter用来删除指定内容的东西，splice是删除指定下标的东西。
                    this.redArr = this.redArr.filter(n => n != i)
                } else {
                    // 增加
                    if (this.redArr.length >= 6) {
                        alert('选的小球不能超过6个哦')
                    } else {
                        this.redArr.push(i);
                    }
                }
            },
            // 点击蓝球
            blueHan(i) {
                if (this.blue == i) {
                    this.blue = 0
                } else {
                    this.blue = i;
                }
            },
            // 随机
            suiji() {
                // 临时数组
                var tempArr = [];
                // 在tempArr中推入不重复的6个数字
                while (tempArr.length < 6) {
                    // 随机一个数字
                    var nRed = parseInt(Math.random() * 33 + 1);
                    // 当nRed不在临时数组中，推入临时数组
                    if (!tempArr.includes(nRed)) {
                        tempArr.push(nRed)
                    }
                }
                this.redArr = tempArr;
                this.blue =  parseInt(Math.random() * 16 + 1);
            }
        }
    }
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        ul {
            width: 340px;
            list-style: none;
            border: 1px solid #000;
            overflow: hidden;
            float: left;
            height: 200px;
            li {
                float: left;
                width: 25px;
                height: 25px;
                line-height: 25px;
                border: 1px solid #000;
                margin: 10px;
                margin-left: 0;
                text-align: center;
                border-radius: 50%;
                cursor: pointer;
            }
            &.redbox {
                li {
                    &.cur {
                        color: white;
                        background-color: rgb(255, 57, 57);
                    }
                }
            }
            &.bluebox {
                li {
                    &.cur {
                        color: white;
                        background-color: rgb(0, 174, 255);
                    }
                }
            }
        }
    }
</style>