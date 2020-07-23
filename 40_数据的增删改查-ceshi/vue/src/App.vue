<template>
  <div class="wrap">
    <Table :columns="columns" :data="tagslist"></Table>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('tagStore/loadTags')
    },
    computed: {
      tagslist() {
        return this.$store.state.tagStore.tagslist.map((item, index) => {
          tagname: item,
          index
        });
      }
    },
    data() {
      return {
        columns: [{
            type: "selection",
            width: 60,
            align: "center"
          },
          {
            title: '标签',
            key: ''
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>