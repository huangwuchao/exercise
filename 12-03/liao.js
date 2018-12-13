const ws= require('ws');
const express= require('express');
const http= require('http');

//创建express应用
let app= express();
//配合express来创建服务器
// let server = http.Server(app);//
// let fuwu= ws.Server;
// let wss= new fuwu({
//     server,port:3101
// })
//开启WebSocket服务器
 app.use(express.static('./html'));//创建静态服务器，设置好读取文件的路径
 let server = http.createServer(app);
 let socketServer = ws.Server;
    let wss = new socketServer({
        server
    });
/*
    ws
        * clients(Array) : 所有客户端对象no'de
            * client : 客户端对象
                * send() 发送消息给客户端
        * 事件
            * connection  用户连接成功时触发
            * message     接收到用户消息时触发
            * close       用户断开连接时触发
 */

// 监听客户端连接
wss.on('connection',(client)=>{
    // 接收消息
    client.on('message', function (msg) {
        console.log(msg)
        // msg = JSON.parse(msg);

        //把客户端的消息广播给所有在线的用户
        wss.broadcast(msg);
    });
});


//自定义方法，用于广播消息
// 遍历所有用户对象，分别发送消息
wss.broadcast = function broadcast(msg) {  
    wss.clients.forEach(function(client) { 
        client.send(msg)
    });  
}; 
server.listen(3102,'10.3.141.23')
