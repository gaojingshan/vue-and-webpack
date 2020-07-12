<template>
  <div class="wrap">
    <div style="padding: 10px 0">
      <!-- 复选框不能使用v-model双向绑定了 -->
      <!-- 因为双向绑定，就相当于直接更改全局数据了，就不能dispatch了。 -->
      <!-- 这里的$event表示用户勾选之后的数组 -->
      <CheckboxGroup :value="carStore.color" @on-change="$store.dispatch('carStore/changeColor',{color: $event})">
        <Checkbox v-for="item in ['红','黄','蓝','黑','白']" :key="item" :label="item">
          
        </Checkbox>
      </CheckboxGroup>
    </div>
    <!-- 表格的数据是在全局的，但是列定义是在组件中的 -->
    <!-- 为什么数据在全局，但是列定义在组件中？ -->
    <!-- 原因是：全局数据是“数据”形式数据，组件中的数据是“UI”形式数据 -->
    <Table :data="carStore.cardata" :columns="columns" />
    <!-- $event ,它就表示on-change事件发生的时候，iviewui组件给你的用户点击的那个页码的数字。比如用户点了3，那么$event就是3 -->
    <Page style="margin-top: 10px" :total="carStore.total" :current="carStore.page" :page-size="10" @on-change="$store.dispatch('carStore/changePage',{page: $event})" />
  </div>
</template>

<script>
  export default {
    // 生命周期
    created() {
      // 发出请求数据的命令，注意这里是异步的，所以是dispatch
      // 以前这里就axios.get()了，但是现在不了
      this.$store.dispatch("carStore/loadData");
    },
    data() {
      return {
        columns: [{
            title: "id",
            key: "id"
          },
          {
            title: '图片',
            key: 'img',
            width: 160,
            render: (h, {
              row
            }) => {
              return h('img', {
                attrs: {
                  src: `http://aiqianduan.com:56506/images/carimages_small/${row.id}/view/${row.img}`
                }
              })
            }
          },
          {
            title: "品牌",
            key: "brand"
          },
          {
            title: "车系",
            key: "series"
          },
          {
            title: "颜色",
            key: "color"
          },
          {
            title: "排放",
            key: "exhaust"
          },
          {
            title: "发动机",
            key: "engine"
          }
        ]
      };
    },
    // 计算后，这样就可以把$store.state.carStore给变短
    computed: {
      carStore() {
        return this.$store.state.carStore;
      }
    }
  };
</script>

<style lang="less" scoped>
  .wrap {
    width: 1000px;
    margin: 40px auto;
  }
</style>