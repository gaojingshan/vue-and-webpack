<template>
    <div>
        <p v-for="i in 33" :key="i" :class="{'cur' : arr.includes(i)}" @click="clickHan(i)">{{i}}</p>
        <button @click="random">随机</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arr: [3, 5, 9, 11]
            };
        },
        methods: {
            clickHan(i) {
                // 判断是否在数组里面，如果在，就删除，如果不在就增加
                if (this.arr.includes(i)) {
                    // 删除可以用splice，但是不知道是第几项，所以还是用filter方便
                    this.arr = this.arr.filter(item => item != i);
                } else {
                    // 最多6项
                    if (this.arr.length < 6) {
                        this.arr.push(i);
                    } else {
                        alert("最多只能选择6个哦");
                    }
                }
            },
            random() {
                // 随机
                var arr = [];
                while (arr.length < 6) {
                    var n = parseInt(Math.random() * 33 + 1);
                    if (!arr.includes(n)) {
                        arr.push(n);
                    }
                }                
                this.arr = arr;
            }
        }
    };
</script>

<style lang="less" scoped>
    p {
        float: left;
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        margin-right: 10px; 
        cursor: pointer;
        // 这里是less的写法，可以直接把cur类写里面
        // 加上&.这个符号表示又是p，又是cur
        &.cur {
            background-color: red;
            color: #fff;
        }
    }
</style>