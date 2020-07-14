<template>
  <div>
    <div class="box">
      <p>要把这个行政通知发给谁？请您选择</p>
      <Tree :data="treeData" :load-data="loadData" show-checkbox></Tree>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    created() {
      axios.get("/api/info").then(data => {
        // 把后端返回的数据形式，映射成为我们要的形式
        this.treeData = data.data.arr.map(item => ({
          title: item.qname,
          loading: false,
          children: [],
          // 编号
          qid: item.qid,
          // 加一个层次，标识我们当前是第几个层次
          floor: 1
        }));
      });
    },
    data() {
      return {
        treeData: []
      };
    },
    methods: {
      loadData(item, callback) {
        // 如果当前是第1层
        if (item.floor == 1) {
          axios.get("/api/info?m=" + item.qid).then(data => {
            callback(
              data.data.arr.map(item => ({
                title: item.bname,
                loading: false,
                children: [],
                // 编号
                bid: item.bid,
                // 加一个层次，标识我们当前是第几个层次
                floor: 2
              }))
            );
          });
        } else if (item.floor == 2) {
          axios.get("/api/info?m=" + item.bid).then(data => {
            callback(
              data.data.arr.map(item => ({
                title: item.rname,
                // 编号
                rid: item.rid,
                // 加一个层次，标识我们当前是第几个层次
                floor: 3
              }))
            );
          });
        }
      }
    }
  };
</script>

<style lang="less" scoped>
.box{
  width: 800px;
  margin: 50px auto;
}
</style>