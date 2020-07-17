<template>
  <div>
    <div class="box">
      <p>要把这个行政通知发给谁？请您选择</p>
      <div>
        当前：
        <Tag closable v-for="(item, index) in nowChooseComputed" :key="index">{{item}}</Tag>
      </div>
      <Tree :data="treeData" :load-data="loadData" show-checkbox @on-check-change="changeCheckHan"></Tree>
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
        treeData: [],
        nowchoose: []
      };
    },
    computed: {
      nowChooseComputed() {
        // 先完成一次过滤，筛选
        for (let i = 0; i < this.nowchoose.length; i++) {
          if (this.nowchoose[i].floor == 1) {
            // 删除所有属于它的部门
            for (let j = 0; j < this.nowchoose.length; j++) {
              if (this.nowchoose[j].belongQid == this.nowchoose[i].qid) {
                this.nowchoose.splice(j, 1);
                j--;
              }
            }
          } else if (this.nowchoose[i].floor == 2) {
            // 删除所有属于它的人
            for (let j = 0; j < this.nowchoose.length; j++) {
              if (this.nowchoose[j].belongBid == this.nowchoose[i].bid) {
                this.nowchoose.splice(j, 1);
                j--
              }
            }
          }
        }
        return this.nowchoose.map(item => {
          if (item.floor == 1) {
            return item.title + '全体成员';
          } else if (item.floor == 2) {
            return item.belongQname + item.title + '全体成员';
          } else if (item.floor == 3) {
            return item.title + '（' + item.belongQname + item.belongBname + '）'
          }
        })
      }
    },
    methods: {
      loadData(item, callback) {
        // 如果当前是第1层
        if (item.floor == 1) {
          axios.get("/api/info?m=" + item.qid).then(data => {
            callback(
              data.data.arr.map(_item => ({
                title: _item.bname,
                loading: false,
                children: [],
                // 编号
                bid: _item.bid,
                // 加一个层次，标识我们当前是第几个层次
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
                // 编号
                rid: _item.rid,
                // 加一个层次，标识我们当前是第几个层次
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
      // 获取节点元素
      changeCheckHan(nowchecked) {
        console.log(nowchecked);
        this.nowchoose = nowchecked;
      }
    }
  };
</script>

<style lang="less" scoped>
  .box {
    width: 800px;
    margin: 50px auto;
    p {
      padding: 10px 0;
    }
  }
</style>