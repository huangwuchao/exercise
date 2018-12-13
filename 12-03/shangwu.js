console.log('nihao');
//可以直接在解释器里打印出来
let arr = [10,20,30]

let res = arr.map(item=>{
    return item*item;
});
console.log(res);
//可以直接在解释器里打印出来
//
//通过require 的方法来链接你想要引入的块模式（同步）；
//
let laoge = require('./js/lianjie.js');
let {getName,bsetNameb} = require('./js/lianjie.js');
console.log(laoge,getName,bsetNameb);