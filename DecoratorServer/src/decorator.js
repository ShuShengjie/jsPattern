// @testDec(false)
// class Demo {}
// function testDec(isDec) {
//   return function (target) {
//     target.isDec = isDec;
//   };
// }
// alert(Demo.isDec);

// ----------------------------------------------

/*
function mixins(...list) {
  console.log(...list);
  return function (target) {
    console.log(target);
    Object.assign(target.prototype, ...list);
  };
}
const Foo = {
  foo() {
    alert("foo");
  },
};
const Bar = {
  bar() {
    alert("bar");
  },
};
@mixins(Foo, Bar)
class MyClass {
  constructor() {
    this.test = "test";
  }
}
let demo = new MyClass();
demo.foo();
demo.bar();
*/

// ----------------------------------------------

/*

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor
}

class Person {
  constructor() {
    this.first = 'A'
    this.last = 'B'
  }
  @readonly
  name() {
    return `${this.first} ${this.last}`
  }
}

let p = new Person();
console.log(p.name())
*/
// 报错
// p.name = function() {
//   alert(100)
// }

// ----------------------------------------------

function log(target, name, descriptor) {
  console.log(descriptor);
  let oldValue = descriptor.value;
  descriptor.value = function () {
    console.log(`calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };
  return descriptor;
}

class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

let math = new Math();
const result = math.add(2, 4);
console.log(result);
