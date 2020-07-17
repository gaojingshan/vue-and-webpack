<template>
  <div class="box">
    <p>要把这个行政通知发给谁？请您选择</p>
    <div>
      当前：
      <Tag  closable v-for="(item, index) in nowcheckComputed" :key="index" @on-close="handleClose">{{item}}</Tag>
    </div>
    <Tree :data="treeData" :load-data="loadData" show-checkbox @on-check-change="checkChangeHan"></Tree>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        treeData: [],
        nowcheck: [],
      };
    },
    created() {
      axios.get("/api/info").then(data => {
        // console.log(data.data.arr);
        this.treeData = data.data.arr.map(item => ({
          title: item.qname,
          loading: false,
          children: [],
          // id
          qid: item.qid,
          floor: 1
        }));
      });
    },
    methods: {
      loadData(item, callback) {
        if (item.floor == 1) {
          axios.get("/api/info?m=" + item.qid).then(data => {
            callback(
              data.data.arr.map(_item => ({
                title: _item.bname,
                loading: false,
                children: [],
                // id
                bid: _item.bid,
                floor: 2,
                // 所属的区
                belongQid: item.qid,
                belongQname: item.title
              }))
            );
          });
        } else if (item.floor == 2) {
          axios.get("/api/info?m=" + item.bid).then(data => {
            callback(
              data.data.arr.map(_item => ({
                title: _item.rname,
                // id
                rid: _item.rid,
                floor: 3,
                // 所属的区
                belongQid: item.belongQid,
                belongQname: item.belongQname,
                belongBid: item.bid,
                belongBname: item.title
              }))
            );
          });
        }
      },
      checkChangeHan(nowcheckArr) {
        this.nowcheck = nowcheckArr;
      },
      handleClose(event, name) {
        console.log(event);
        console.log(name);
        console.log(event);
        
      }
    },
    computed: {
      nowcheckComputed() {
        for (let i = 0; i < this.nowcheck.length; i++) {
          if (this.nowcheck[i].floor == 1) {
            for (let j = 0; j < this.nowcheck.length; j++) {
              if (this.nowcheck[i].qid == this.nowcheck[j].belongQid) {
                this.nowcheck.splice(j, 1);
                j--;
              }
            }
          } else if (this.nowcheck[i].floor == 2) {
            for (let j = 0; j < this.nowcheck.length; j++) {
              if (this.nowcheck[i].bid == this.nowcheck[j].belongBid) {
                this.nowcheck.splice(j, 1);
                j--;
              }
            }
          }
        }
        return this.nowcheck.map(item => {
          if (item.floor == 1) {
            return item.title + "全体成员";
          } else if (item.floor == 2) {
            return item.belongQname + item.title + "全体成员";
          } else if (item.floor == 3) {
            return item.title + "(" + item.belongQname + item.belongBname + ")";
          }
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .box {
    width: 1000px;
    margin: 40px auto;
  }
</style>