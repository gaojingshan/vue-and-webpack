<template>
  <div class="box">
    {{a}}
    <Button v-on:click="a++">加1</Button>
    <br />
    <br />
    <!-- 1.修饰符.stop -->
    <div @click="han">
      <Button @click.stop="a+=2">按我加2</Button>
    </div>
    <br />
    <br />
    <!-- 2.prevent修饰符 -->
    <div @mousewheel.prevent="wheelHan" class="wheel">
      <p :style="{'font-size': a + 'px'}">在这里滚动鼠标滚轮,可以放大缩小文字</p>
    </div>
    <br />
    <br />
    <!-- 3.默认就是冒泡阶段,使用capture就先冒泡他 -->
    <!-- 原本 show3 -> show2 -> show1 -->
    <!-- show2 加上 capture 后  show2 -> show3 -> show1 -->
    <div @click="show1">
      <div @click.capture="show2">
        <Button @click="show3">capture 点击我控制台看顺序</Button>
      </div>
    </div>
    <br />
    <br />
    <!-- 4.self别的元素传到它的身上，是不会引发事件的。只当事件是从侦听器绑定的元素本身触发时才触发回调。 -->
    <!-- self show3->show1 -->
    <div @click="show1">
      <div @click.self="show2">
        <div @click="show3">self 点击我控制台看顺序</div>
      </div>
    </div>
    <!-- self show2->show1 -->
    <div @click="show1">
      <div @click.self="show2">self 点击我控制台看顺序</div>
    </div>
    <br />
    <br />
    <!-- 5.enter 或 13（回车键的键码） 只当事件是从特定键触发时才触发回调-->
    <input type="text" @keydown.enter="keydownHan" placeholder="输入内容按回车看控制台">
    <input type="text" @keydown.13="keydownHan" placeholder="输入内容按回车看控制台">
    <br />
    <br />
    <!-- .once 修饰符 -->
    <div @click.once="han2">我只能弹一次哦,在点击我没有用哦</div>
    <div></div>
    <p style="height:1000px">哈哈哈哈</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 10,
      };
    },
    methods: {
      han() {
        alert("我是外层元素");
      },
      han2() {
        alert('我只能弹一次哦');
      },
      wheelHan(e) {
        if (e.deltaY > 0) {
          this.a++;
        } else {
          this.a--;
        }
      },
      show1() {
        console.log("我是show1");
      },
      show2() {
        console.log("我是show2");
      },
      show3() {
        console.log("我是show3");
      },
      keydownHan(e) {
        console.log(e.target.value);
      }
    },
  };
</script>

<style lang="less" scoped>
  .box {
    width: 1000px;
    margin: 30px auto;
  }
  .wheel {
    height: 100px;
    border: 1px solid #eee;
  }
</style>