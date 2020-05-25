// 每个文件都需要这么一个壳
/* define(function (require, exports, module) {
    
}); */
define(function (require, exports, module) {
  const circle = require('./circle.js');
  const zhouchang = require('./square.js');
  const People = require('./People.js');

  console.log(circle.mianji(10));
  console.log(circle.zhouchang(10));

  console.log(zhouchang.mianji(10));
  console.log(zhouchang.zhouchang(10));

  const btn = document.getElementById('btn');
  const kuang = document.getElementById('kuang');
  const h1 = document.getElementById('h1');
  btn.onclick = function () {
    h1.innerHTML = '圆的面积为' + circle.mianji(kuang.value);
  };
  // 实例化一个人类
  const xiaoming = new People('小杉', 18, '女');
  xiaoming.sayHello();
});
