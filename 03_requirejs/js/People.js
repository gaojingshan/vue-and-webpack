define([], function () {
  function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  People.prototype.sayHello = function () {
    console.log('大家好，我叫' + this.name + '，我今年' + this.age + '岁了');
  };
  return People;
});
