const http= require('http');
const fs= require('fs');
const url= require('url');
const path= require('path');
const mime= require('./mime.js');

http.createServer((req,res)=>{
    let lujin= url.parse(req.url).pathname;
    console.log(lujin);
    
    let ext = path.extname(lujin).slice(1);
    let jiudui;
    switch(lujin){
        case '/log':
                jiudui=path.join(__dirname,'html/log.html');
        break;
        case '/zhuche':
                jiudui=path.join(__dirname,'html/zhuche.html');
        break;
        // case '/img':
        //         jiudui=path.join(__dirname,'img');
        //         fs.readdir(jiudui,(err,data)=>{
        //                 if(err){
        //                     res.writeHead(404,{'Content-Type':`text/plain;charset=utf-8`});
        //                     res.end(`你访问你的url:${lujin} 不存在`);
        //                 }
        //                 // if(err){
        //                 //     res.writeHead(404,{'Content-Type':'taxt/plain;charset=tuf-8'});
        //                 //     res.end(`你访问的页面${lijin}不存在`);
        //                 // }
        //                 res.writeHead(200,{'Content-Type':`${mime[ext]};charset=utf-8`});
        //                 res.end(data);
        //             });
        // break;
        default:
        jiudui= path.join(__dirname,lujin);
    }


    fs.readFile(jiudui,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':`text/plain;charset=utf-8`});
            res.end(`你访问你的url:${lujin} 不存在`);
        }
        // if(err){
        //     res.writeHead(404,{'Content-Type':'taxt/plain;charset=tuf-8'});
        //     res.end(`你访问的页面${lijin}不存在`);
        // }
        res.writeHead(200,{'Content-Type':`${mime[ext]};charset=utf-8`});
        res.end(data);
    });
    //console.log(ext);
}).listen(3007,()=>{
    console.log('fuwuqi 3007');
})