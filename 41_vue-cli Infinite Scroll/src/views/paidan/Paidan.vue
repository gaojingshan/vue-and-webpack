<template>
  <div>
    <header>
      <ul>
        <li class="cur">毛线索</li>
        <li>跟进中</li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    created(){
        
    }
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
