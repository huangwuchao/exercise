const events=require('events'); 

//创建一个events对象
let even= new events.EventEmitter();
even.on('clock',()=>{
        console.log('你是个好人');
});
setTimeout(()=>{
    even.emit('clock');
},1000)
console.log('以前我没得选择');
