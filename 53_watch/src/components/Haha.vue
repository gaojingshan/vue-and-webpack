<template>
    <div>
        {{mya}}
        <input type="range" v-model="mya" />
    </div>
</template>

<script>
    export default {
        props: ["a"],
        data() {
            return {
                mya: this.a
            };
        },
        watch: {
            mya(a) {
                this.$emit("changeA", a);
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>