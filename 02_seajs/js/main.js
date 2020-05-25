// 每个文件都需要这么一个壳
/* define(function (require, exports, module) {
    
}); */
define(function (require, exports, module) {
  var circle = require('./circle.js');
  alert(circle.mianji(10));
  alert(circle.zhouchang(10));
});
