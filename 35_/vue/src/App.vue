<template>
  <div>
    <Tree :data="treeData" :load-data="loadData" show-checkbox></Tree>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    created() {
      axios.get("/api/a").then(data => {
        console.log(data.data);
      });
    }
  };
</script>

<style lang="scss" scoped>

</style>