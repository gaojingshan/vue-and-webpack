<template>
  <div class="wrap">
    <div class="btns">
      <Button type="primary">新增标签</Button>
      <Button type="error" @click="delHan">批量删除</Button>
    </div>
    <Table :columns="columns" :data="taglist" @on-selection-change="selectionChangeHan"></Table>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch("tagStore/loadTags");
    },
    computed: {
      tagStore() {
        return this.$store.state.tagStore;
      },
      taglist() {
        // 把["热卖","好物","哈哈","嘻嘻"]，转为对象的数组
        // [{tagname:'热卖'},{tagname:'好物'}, ......]
        return this.$store.state.tagStore.taglist.map((item, index) => ({
          tagname: item,
          index
        }));
      }
    },
    data() {
      return {
        // 已经选择项的编号
        selection: [],
        columns: [
          // 复选框
          {
            type: "selection",
            width: 60,
            align: "center"
          },
          {
            title: "标签",
            key: "tagname"
          },
          {
            title: "操作",
            render: (h, {
              row,
              index
            }) => {
              return h("div", [
                h(
                  "a", {
                    attrs: {
                      class: "mya"
                    },
                    on: {
                      click: () => {
                        // 通知store
                        // index  k v 一致省略v
                        this.$store.dispatch("tagStore/prev", {
                          index
                        });
                      }
                    }
                  },
                  "上移"
                ),
                h(
                  "a", {
                    attrs: {
                      class: "mya"
                    }
                  },
                  "下移"
                ),
                h(
                  "a", {
                    attrs: {
                      class: "mya"
                    }
                  },
                  "删除"
                )
              ]);
            }
          }
        ]
      };
    },
    methods: {
      delHan() {
        // 第一步就是要知道用户给哪些项打勾了
        // 就是this.selection
        // 弹出确认框
        this.$Modal.confirm({
          title: "请确认",
          content: "<p>真的要删除" + this.selection.length + "项吗</p>",
          onOk: () => {
            // 如果用户点击确定了，再删除
            this.$store.dispatch("tagStore/del", {
              index: this.selection
            });
          },
        });
      },
      // 当用户勾选了表格的复选框的时候
      selectionChangeHan(selection) {
        // 只需要提炼出数组中的index值
        this.selection = selection.map(item => item.index);
      }
    }
  };
</script>

<style lang="less">
  // mya 不能加在scoped里，因为是动态的
  .wrap {
    width: 800px;
    margin: 40px auto;
    .mya {
      margin-right: 10px;
    }
    .btns {
      margin-bottom: 10px;
    }
  }
</style>