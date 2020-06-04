<template>
    <div>
        <A :star="star" :idx="idx" @changeStar="changeStarHan" />
        <B :star="star" :idx="idx" @goPrev="goPrevHan" @goNext="goNextHan" />
        <C :star="star" :idx="idx" @changeIdx="changeIdxHan" />
    </div>
</template>

<script>
    import A from './components/A.vue';
    import B from './components/B.vue';
    import C from './components/C.vue';
    export default {
        data() {
            return {
                star: 'yangmi',
                idx: 1
            }
        },
        components: {
            A,
            B,
            C
        },
        methods: {
            goPrevHan() {
                this.idx--
            },
            goNextHan() {
                this.idx++
            },
            changeIdxHan({idx}){
                this.idx = idx
            },
            changeStarHan({star}){
                this.star = star
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>