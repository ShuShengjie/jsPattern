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

// function log(target, name, descriptor) {
//   console.log(descriptor);
//   let oldValue = descriptor.value;
//   descriptor.value = function () {
//     console.log(`calling ${name} with`, arguments);
//     return oldValue.apply(this, arguments);
//   };
//   return descriptor;
// }

// class Math {
//   @log
//   add(a, b) {
//     return a + b;
//   }
// }

// let math = new Math();
// const result = math.add(2, 4);
// console.log(result);


// import StateMachine from "javascript-state-machine";
// // 初始化状态机模型
// let fsm = new StateMachine({
//   init: "收藏",
//   transitions: [
//     {
//       name: "doStore",
//       from: "收藏",
//       to: "取消收藏",
//     },
//     {
//       name: "deleteStore",
//       from: "取消收藏",
//       to: "收藏",
//     },
//   ],
//   methods: {
//     // 监听执行收藏
//     onDoStore() {
//       alert("收藏成功");
//       updateText();
//     },
//     // 监听取消收藏
//     onDeleteStore() {
//       alert("取消收藏");
//       updateText();
//     },
//   },
// });
// let btn = document.getElementById("btn1");
// // 更新收藏文案
// function updateText() {
//   btn.innerHTML = fsm.state;
// }


// // 按钮点击事件
// btn.onclick = function () {
//   if (fsm.is("收藏")) {
//     fsm.doStore();
//   } else {
//     fsm.deleteStore();
//   }
// };

// // 初始化文案
// updateText();


// 手写简易promise
import StateMachine from "javascript-state-machine";
import { resolve } from "upath";

// 状态机模型
let fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    // 监听resolve
    onResolve(state, data) {
      // state - 当前状态机实例 data - fsm.resolve(xxx)传递的参数

    },
    onRejected(state, data) {
      // state - 当前状态机实例 data - fsm.reject(xxx)传递的参数
    }
  }
})

// 定义promise 
class MyPromise {
  constructor(fn) {
    fn(function() {
      // resolve函数
    }, function() {
      // reject函数
    })
  }
}

// test
function loadImg(src) {
  const promise = new MyPromise((resolve, reject) => {
    let img = document.createElement('img')
    img.onload = function() {
      resolve(img)
    }
    img.onerror = function() {
      reject()
    }
    img.src = src;
  })
  return promise
}