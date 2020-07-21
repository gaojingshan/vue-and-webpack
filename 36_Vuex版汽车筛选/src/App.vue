<template>
  <div class="wrap">
    品牌：
    <Tabs value="A">
      <TabPane v-for="(v, zimu) in allbs" :key="zimu" :label="zimu" :name="zimu">
        <Checkbox v-for="(vv, brand) in v" :key="brand" :label="brand" :value="nowChoose.includes(brand)" @on-change="checkboxChangeHan(brand)" :disabled="nowChoose.length >= 4 && !nowChoose.includes(brand)">
          {{brand}}
        </Checkbox>
      </TabPane>
    </Tabs>
    <div class="choosedBox" v-if="nowChoose.length !=0">
      已选品牌：<Checkbox v-for="item in nowChoose" :key="item" :label="item" :value="true" @on-change="checkboxChangeHan(item)">
        {{item}}
      </Checkbox>
      <span v-if="nowChoose.length >= 4">（最多可选4个）</span>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('carStore/loadAllbs')
    },
    data() {
      return {
        nowChoose: []
      }
    },
    computed: {
      // 过一下，这样template里面就可以直接使用{{allbs}}了
      allbs() {
        return this.$store.state.carStore.allbs;
      }
    },
    methods: {
      // 点击复选框
      checkboxChangeHan(brand) {
        // 按双色球的逻辑
        if (this.nowChoose.includes(brand)) {
          // 删除
          this.nowChoose = this.nowChoose.filter(item => item != brand)
        } else {
          // 增加
          this.nowChoose.push(brand)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrap {
    width: 800px;
    margin: 40px auto;
    .ivu-checkbox-wrapper {
      margin-right: 30px;
    }
    .choosedBox {
      margin-top: 20px;
    }
  }
</style>