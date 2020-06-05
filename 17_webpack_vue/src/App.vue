<template>
    <div>
        <Hd :arr="arr"/>
        <Bd :arr="arr"/>
        <Ft :arr="arr"/>
        {{arr}}
    </div>
</template>

<script>
    import Hd from './components/Hd.vue';
    import Bd from './components/Bd.vue';
    import Ft from './components/Ft.vue';
    export default {
        components: {
            Hd,
            Bd,
            Ft
        },
        data() {
            return {
                arr: [{
                        'title': '吃饭',
                        'done': true
                    },
                    {
                        'title': '睡觉',
                        'done': false
                    },
                    {
                        'title': '打豆豆',
                        'done': true
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>