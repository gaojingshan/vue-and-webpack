<template>
    <div>
        <select v-model="year">
            <option v-for="i in 100" :key="i" :value="1930 + i">{{1930 + i}}</option>
        </select>
        <select v-model="month">
            <option v-for="i in 12" :key="i" :value="i">{{i}}</option>
        </select>
        <table>
            <tr v-for="i in 6" :key="i">
                <td v-for="j in 7" :key="j">
                    <p>{{ arr[7 * (i - 1) + (j - 1)].gongli }}</p>
                    <p>{{ arr[7 * (i - 1) + (j - 1)].nongli.term ? arr[7 * (i - 1) + (j - 1)].nongli.term : arr[7 * (i - 1) + (j - 1)].nongli.dayCn}}</p>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import solarlunar from 'solarlunar';
    export default {
        data() {
            return {
                year: 2020,
                // 人类真实月份
                month: 6
            };
        },
        computed: {
            arr() {
                // 三要素
                // 本月1号星期几
                var week = new Date(this.year, this.month - 1, 1).getDay(); //5
                //本月有几天
                var today = new Date(this.year, this.month, 0).getDate(); //31
                //上月有几天
                var lastday = new Date(this.year, this.month - 1, 0).getDate(); //29
                var arr = [];
                // 周五,要考虑到周日输出是0的情况
                // 本月1号星期几，就要有上个月的尾巴几天减1，星期日有6天尾巴
                var count = week == 0 ? 7 : week;
                // 上月
                for (let i = 1; i < count; i++) {
                    arr.unshift({
                        'gongli': lastday - i + 1,
                        // solar2lunar 月份不减1
                        'nongli': solarlunar.solar2lunar(this.year, this.month - 1, lastday - i + 1)
                    });
                }
                // 本月
                for (let i = 1; i <= today; i++) {
                    arr.push({
                        'gongli': i,
                        // solar2lunar 月份不减1
                        'nongli': solarlunar.solar2lunar(this.year, this.month, i)
                    });
                }
                // 放入下月的开头
                var n = 1;
                while (arr.length < 6 * 7) {
                    arr.push({
                        'gongli': n,
                        // solar2lunar 月份不减1
                        'nongli': solarlunar.solar2lunar(this.year, this.month + 1, n)
                    });
                    n++;
                }
                return arr;
            }
        }
    };
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    table,
    tr,
    td {
        border: 1px solid #333;
    }
    td {
        width: 70px;
        height: 30px;
        text-align: center;
    }
</style>