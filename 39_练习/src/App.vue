<template>
  <div class="wrap">
    <div style="padding:10px 0">
      <CheckboxGroup :value="carStore.color" @on-change="$store.dispatch('carStore/changeColor',{color:$event})">
        <Checkbox v-for="item in ['红','黄','蓝','黑','白','粉']" :key="item" :label="item"></Checkbox>
      </CheckboxGroup>
      <RadioGroup :value="carStore.brand" @on-change="$store.dispatch('carStore/changeBrand',{brand:$event})">
        <Radio v-for="item in ['奥迪','本田','奔驰','宝马','大众','丰田']" :key="item" :label="item"></Radio>
      </RadioGroup>
    </div>
    <Table :columns="columns" :data="carStore.cardata"></Table>
    <Page style="margin-top:10px" :total="carStore.total" :current="carStore.page" :page-size="10" @on-change="$store.dispatch('carStore/changePage',{page: $event})" />
  </div>
</template>

<script>
  export default {
    // 生命周期
    created() {
      this.$store.dispatch('carStore/loadData')
    },
    data() {
      return {
        columns: [{
            key: "id",
            title: "id"
          },
          {
            key: "img",
            title: "图片",
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
            key: "brand",
            title: "品牌"
          },
          {
            key: 'series',
            title: "车系"
          },
          {
            key: 'color',
            title: "颜色"
          },
          {
            key: 'exhaust',
            title: "排气"
          },
          {
            key: 'engine',
            title: "发动机"
          }
        ]
      };
    },
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