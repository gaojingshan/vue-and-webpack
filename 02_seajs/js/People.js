define(function (require, exports, module) {
  function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  People.prototype.sayHello = function () {
    console.log('你好，我是' + this.name + '我今年' + this.age + '岁了');
  };
  // 默认暴露
  module.exports = People;
});
