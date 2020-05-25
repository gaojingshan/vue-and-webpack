// 每个文件都需要这么一个壳
/* define(function (require, exports, module) {
    
}); */
define(function (require, exports, module) {
  var circle = require('./circle.js');
  var square = require('./square.js');
  //   alert(circle.mianji(10));
  //   alert(circle.zhouchang(10));

  //   alert(square.mianji(10));
  //   alert(square.zhouchang(10));

  const kuang = document.getElementById('kuang');
  const btn = document.getElementById('btn');
  const h1 = document.getElementById('h1');
  btn.onclick = function () {
    h1.innerHTML = '圆的面积为' + circle.mianji(kuang.value);
  };
  var People = require('./People');
  // 实例化一个人类
  var xiaoming = new People('小杉', 18, '女');
  xiaoming.sayHello();
});
