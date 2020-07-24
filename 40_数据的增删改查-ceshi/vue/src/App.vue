<template>
  <div class="wrap">
    <div class="btns">
      <Button type="primary" @click="addModal">添加</Button>
      <Button type="error" @click="delChangeHan">批量删除</Button>
    </div>
    <Table :columns="columns" :data="tagslist" @on-selection-change="selectionChangeHan"></Table>
    <!-- 对话框 -->
    <Modal v-model="addModal" title="新增标签">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="标签名称" prop="name">
          <i-input v-model="formValidate.name" placeholder=""></i-input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch("tagStore/loadTags");
    },
    computed: {
      tagslist() {
        return this.$store.state.tagStore.tagslist.map((item, index) => ({
          tagname: item,
          index
        }));
      }
    },
    data() {
      return {
        // 打勾的项
        selection: [],
        addModal: true,
        columns: [{
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
                    },
                    on: {
                      click: () => {
                        this.$store.dispatch("tagStore/next", {
                          index
                        });
                      }
                    }
                  },
                  "下移"
                ),
                h(
                  "a", {
                    attrs: {
                      class: "mya"
                    },
                    on: {
                      click: () => {
                        this.$store.dispatch("tagStore/del", {
                          index
                        });
                      }
                    }
                  },
                  "删除"
                )
              ]);
            }
          }
        ],
        formValidate: {
          name: '',
        },
        ruleValidate: {
          name: [{
            required: true,
            message: '',
            trigger: 'blur'
          }],
        }
      };
    },
    methods: {
      // 批量删除
      delChangeHan() {
        this.$Modal.confirm({
          title: '确认',
          content: '<p>您确认要删除' + this.selection.length + '项吗</p>',
          onOk: () => {
            this.$store.dispatch("tagStore/delete", {
              index: this.selection
            });
          },
        });
      },
      selectionChangeHan(selection) {
        console.log(selection);
        this.selection = selection.map(item => item.index);
      }
    }
  };
</script>

<style lang="less">
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