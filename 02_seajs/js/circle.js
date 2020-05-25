// define表示定义模块
define(function (require, exports, module) {
  exports.mianji = (r) => r * r * 3.14;
  exports.zhouchang = (r) => 2 * 3.14 * r;
});
