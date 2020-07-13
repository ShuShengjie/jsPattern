const EventEmitter = require('events').EventEmitter;

/*
const emitter1 = new EventEmitter()
// 监听some事件
emitter1.on('some', info => {
  console.log('fn1', info)
})
emitter1.on('some', info => {
  console.log('fn2', info)
})
// 触发some
emitter1.emit('some', 'xxxxx')
*/

// 继承
// class Dog extends EventEmitter {
//   constructor(name) {
//     super()
//     this.name = name
//   }
// }

// let simon = new Dog('simon')
// simon.on('bark', function() {
//   console.log(this.name, 'barked')
// })
// setInterval(() => {
//   simon.emit('bark')
// }, 1000)

// stream 用到自定义事件
const fs = require('fs');
const readLine = require('readline');
const readStream = fs.createReadStream('./demoFile.txt')
let length = 0;
let lines = 0;
let rl = readLine.createInterface({
  input: fs.createReadStream('./demoFile.txt')
})
rl.on('line', function(line){
  lines++;
})
rl.on('close', function() {
  console.log('lines', lines)
})
readStream.on('data', function (chunk) {
  let len = chunk.toString().length;
  console.log('len', len);
  length += len;
})
readStream.on('end', function () {
  console.log('length', length)
})