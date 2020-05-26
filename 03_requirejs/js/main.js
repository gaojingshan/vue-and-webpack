// 依赖注入
require(['circle', 'square'], function (circle, square) {
  console.log(circle.mianji(10));
  console.log(square.mianji(10));
  console.log(square.mianji(10));
});
