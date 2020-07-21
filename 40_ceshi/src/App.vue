<template>
  <div class="wrap">
    <Tabs value="A">
      <TabPane v-for="(v, zimu) in allbs" :key="zimu" :label="zimu" :name="zimu">
        <Checkbox v-for="(vv, brand) in v" :key="brand" :label="brand" @on-change="checkHan(brand)" :value="nowBrand.includes(brand)" :disabled="nowBrand.length>=4 && !nowBrand.includes(brand)">{{brand}}</Checkbox>
      </TabPane>
    </Tabs>
    <div style="margin-top: 10px" v-if="nowBrand.length > 0">
      已选品牌：
      <Checkbox v-for="item in nowBrand" :key="item" :label="item" :value="true" @on-change="checkHan(item)">{{item}}</Checkbox>
      <span v-if="nowBrand.length >= 4">（最多只能选择4个）</span>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch("carStore/loadData");
    },
    computed: {
      allbs() {
        return this.$store.state.carStore.allbs;
      }
    },
    data() {
      return {
        nowBrand: []
      };
    },
    methods: {
      checkHan(brand) {
        if (this.nowBrand.includes(brand)) {
          this.nowBrand = this.nowBrand.filter(item => item != brand);
        } else {
          this.nowBrand.push(brand);
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .wrap {
    width: 1000px;
    margin: 40px auto;
    .ivu-checkbox-wrapper {
      margin-right: 30px;
    }
  }
</style>