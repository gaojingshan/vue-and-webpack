<template>
  <div class="wrap">
    <div>
      <CheckboxGroup :value="carData.color" @on-change="$store.dispatch('carData/changeColor',{color: $event})">
        <Checkbox v-for="item in ['红','黄','蓝','黑','白']" :key="item" :label="item"></Checkbox>
      </CheckboxGroup>
      <!-- 品牌 -->
      <RadioGroup :value="carData.brand" @on-change="$store.dispatch('carData/changeBrand',{'brand':$event})">
        <Radio v-for="item in ['奥迪','本田','奔驰','宝马','大众','丰田']" :key="item" :label="item"></Radio>
      </RadioGroup>
    </div>
    <Table :columns="columns" :data="carData.cardata"></Table>
    <Page style="margin-top:10px" :total="carData.total" :current="carData.page" :page-size="10" @on-change="$store.dispatch('carData/changePage',{page: $event})" />
  </div>
</template>

<script>
  export default {
    // 生命周期
    created() {
      this.$store.dispatch("carData/loadData");
    },
    data() {
      return {
        columns: [{
            title: "id",
            key: "id"
          },
          {
            title: "图片",
            key: "img",
            width: 160,
            render: (h, {
              row
            }) => {
              return h("img", {
                attrs: {
                  src: `http://aiqianduan.com:56506/images/carimages_small/${row.id}/view/${row.img}`
                }
              });
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
    // 计算后的值
    computed: {
      carData() {
        return this.$store.state.carData;
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