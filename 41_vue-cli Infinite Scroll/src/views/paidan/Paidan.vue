<template>
  <div>
    <header>
      <ul>
        <li :class="{'cur' : nowColumnName == 'maoxiansuo'}">线索</li>
        <li :class="{'cur' : nowColumnName == 'genjinzhong'}">跟进中</li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 不是点谁谁加cur，而是路由到谁，谁加cur。
  // 需要生命周期，识别路由编号
  created() {
    this.nowColumnName = this.$route.name;
    console.log(this.nowColumnName);
  },
  data() {
    return {
      nowColumnName: '',
    };
  },
};
</script>

<style lang="less" scoped>
@import url(../../less/var.less);
header {
  width: 100%;
  ul {
    display: flex;
    text-align: center;
    align-items: center;
    @h: 40px;
    li {
      flex: 1;
      height: @h;
      line-height: @h;
      box-sizing: border-box;
      font-size: 14px;
      &.cur {
        border-bottom: 3px solid @cur;
      }
    }
  }
}
</style>
