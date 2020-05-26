// 依赖注入
// 回调
require(['circle', 'square', 'People'], function (circle, square, People) {
  console.log(circle.mianji(10));
  console.log(circle.zhouchang(10));

  console.log(square.mianji(10));
  console.log(square.zhouchang(10));

  var xiaoming = new People('杉姐', 18, '女');
  xiaoming.sayHello();
});
