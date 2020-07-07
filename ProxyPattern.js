// let Shoes = function (name) {
//   this.name = name;
// };
// Shoes.prototype.getName = function () {
//   return this.name;
// };
// let assistant = {
//   buyShoes: function (shoes) {
//     star.buyShoes(shoes.getName());
//   },
// };
// let star = {
//   buyShoes: function (name) {
//     console.log(`buy a${name}`);
//   },
// };
// assistant.buyShoes(new Shoes("adidas"));

// demo2
let ad = function (price) {
  this.price = price;
};
ad.prototype.getPrice = function () {
  return this.price;
};
let assistant = {
  init(ad) {
    let money = ad.getPrice();
    if (money > 300) {
      this.receiveAd(money);
    } else {
      this.rejectAd(money);
    }
  },
  receiveAd(price) {
    star.receiveAd(price);
  },
  rejectAd(price) {
    star.rejectAd(price);
  },
};
let star = {
  receiveAd(price) {
    console.log(`ok: i agree this ad which price is ${price}`);
  },
  rejectAd(price) {
    console.log(`sorry: ${price} is too low`);
  },
};
assistant.init(new ad(500));
assistant.init(new ad(100));
