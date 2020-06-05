<template>
    <div>
        <span v-if="!isEditing" @dblclick="isEditing = true">{{item.title}}</span>
        <span v-else>
            <input type="text" v-model="item.title" @blur="isEditing = false" @keydown.enter="isEditing = false">
        </span>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        data() {
            return {
                isEditing: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>