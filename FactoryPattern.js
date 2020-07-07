// 简单工厂 适合需求情况比较少
let factory = function (name, age, sex, national) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  switch (national) {
    case "Chinese":
      this.speak = function () {
        console.log(
          `我叫 ${this.name}, 我今年 ${this.age}, 我的性别是 ${this.sex}，我说中国话`
        );
      };
      break;
    case "England":
      this.speak = function () {
        console.log(
          `i am ${this.name}, my age is ${this.age}, my sex is ${this.sex}, i speak english`
        );
      };
      break;
  }
};

let person1 = new factory("jack", 15, "boy", "England");
person1.speak();
