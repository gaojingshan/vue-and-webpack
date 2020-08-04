<template>
    <div>
        <Haha :a="a" @changeA="a=$event" />
    </div>
</template>

<script>
    import Haha from "./components/Haha.vue";
    export default {
        components: {
            Haha
        },
        data() {
            return {
                a: 10
            };
        },
        watch:{
            a(v){
                console.log(v);
                
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>