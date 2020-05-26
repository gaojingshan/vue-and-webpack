// AMD是依赖前置
require(['a', 'b'], function (a, b) {});

// CMD是依赖就近
define(function (require, exports, module) {
  var a = require('./a.js');
  console.log(a.test(10));

  var b = require('./b.js');
  console.log(b.test(10));
});
