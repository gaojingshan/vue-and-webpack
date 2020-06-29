<template>
    <div>
        <div v-if=" Object.keys(pcasobj).length != 0">
            <select v-model="p">
                    <option  v-for="(v, p) in pcasobj" :key="p">{{p}}</option>
                </select>
            <select v-model="c">
                    <option v-for="(v, c) in pcasobj[p]" :key="c">{{c}}</option>
                </select>
            <select v-model="a">
                    <option v-for="(v, a) in pcasobj[p][c]" :key="a">{{a}}</option>
                </select>
            <select v-model="s">
                    <option v-for="s in pcasobj[p][c][a]" :key="s" >{{s}}</option>
                </select>
            <h3>
                {{p}}{{c}}{{a}}{{s}}
            </h3>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                pcasobj: {},
                p: '北京市',
                c: '市辖区',
                a: '东城区',
                s: '东华门街道'
            }
        },
        created() {
            axios.get('http://www.aiqianduan.com:56506/pcas').then(data => {
                this.pcasobj = data.data;
            })
        },
        // watch 经常watch 双向绑定的东西
        watch: {
            // 当省变化了，必须让c变为省会城市。为了防止四个直辖市之间切换“市辖区”没有引发切换，所以把a也换一下。
            p(v) {
                this.c = Object.keys(this.pcasobj[v])[0];
                this.a=Object.keys(this.pcasobj[v][this.c])[0];
            },
            // 当市变化了，必须让a变化
            c(v) {
                this.a = Object.keys(this.pcasobj[this.p][v])[0];
            },
            // 当县变化了，必须让s变化
            a(v) {
                this.s = this.pcasobj[this.p][this.c][v][0];
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>