let http = require('http');
let url = require('url');

//console.log(http);
//request保存的是浏览器给服务器的信息：等于是请求的操作
//response保存的是服务器传给浏览器的信息：等于是响应的操作
http.createServer((request,response)=>{
   
    
    response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
   
    console.log(url.parse(request.url,true));
   
    switch(request.url){
        case '/aa':
            response.end('首页');
        break;
        case '/cc':
            response.end('列表');
        break;
        default:
            response.end(`页面${request.url}不存在`);
    }
    //单纯的文本打印到页面不用写响应头，如果是要显示其他格式要写对应的响应头；
    //设置响应头Content—Type，用于告诉浏览器相应内容的类型
    // response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//html样式响应头的设置
    // response.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});//文本样式的响应头设置
    // response.write('hello,nodejs');
    // response.write('<h2>hello,huangwuchao</h2>');
    // reaponse.end('doushidalao')
    // response.end();//标记结束响应  一定要写！！
}).listen(8080,()=>{
    console.log('服务器启动成功，端口为8080');
    //listen（）；是设置监听窗口
});