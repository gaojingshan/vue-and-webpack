<template>
    <div class="wrap">
        <div class="hd">
            <p @mouseenter="choose = '新闻'" :class="{'cur' : choose == '新闻'}">新闻</p>
            <p @mouseenter="choose = '军事'" :class="{'cur' : choose == '军事'}">军事</p>
            <p @mouseenter="choose = '娱乐'" :class="{'cur' : choose == '娱乐'}">娱乐</p>
        </div>
        <div class="bd">
            <ul v-show="choose == '新闻'">
                <li>我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻</li>
                <li>我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻</li>
                <li>我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻</li>
            </ul>
            <ul v-show="choose == '军事'">
                <li>我是军事我是军事我是军事我是军事我是军事我是军事我是军事我是军事我是军事我是军事</li>
                <li>我是军事我是军事我是军事我是军事我是军事我是军事我是军事我是军事我是军事我是军事</li>
                <li>我是军事我是军事我是军事我是军事我是军事我是军事我是军事我是军事我是军事我是军事</li>
            </ul>
            <ul v-show="choose == '娱乐'">
                <li>我是娱乐我是娱乐</li>
                <li>我是娱乐我是娱乐</li>
                <li>我是娱乐我是娱乐</li>
                <li>我是娱乐我是娱乐</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                choose: "新闻"
            };
        }
    };
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    .wrap {
        width: 300px;
        border: 1px solid #000;
        margin: 40px auto;
        .hd {
            p {
                background-color: #eee;
                float: left;
                width: 100px;
                text-align: center;
                font-size: 16px;
                line-height: 32px;
                cursor: pointer;
                &.cur {
                    background-color: orange;
                }
            }
        }
        .bd ul {
            list-style: none;
            li {
                font-size: 12px;
                line-height: 175%;
            }
        }
    }
</style>