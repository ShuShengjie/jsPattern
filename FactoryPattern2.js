// 抽象工厂模式
function MyCar(color, price) {
  this.color = color;
  this.price = price;
}
MyCar.prototype.run = function () {
  throw new Error("我是接口， 具体怎么做， 你们子类自己去玩");
};
let BMW = function (color, price) {
  MyCar.call(this, color, price);
};
BMW.prototype.run = function () {
  console.log(
    `i am bmw, my color is ${this.color}, my price is ${this.price}, BMW is running`
  );
};
let bmw = new BMW("red", 998);
bmw.run();


let BenChi = function (color, price) {
  MyCar.call(this, color, price);
};
BenChi.prototype.run = function () {
  console.log(
    `i am bmw, my color is ${this.color}, my price is ${this.price}, BenChi is running`
  );
};
let bc = new BenChi("yellow", 889);
bc.run();
