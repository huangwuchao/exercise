const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mim = require('./mime.js');

http.createServer((req,res)=>{
    

    let pathname = url.parse(req.url).pathname;
    let ext = path.extname(pathname).slice(1);
    //let realPath = __dirname+pathname;
     let realPath = path.join(__dirname,pathname);
    //console.log('pathname: ',pathname);
    // fs.readFile(realPath,(err,data)=>{
    
    //     console.log('data:',data)
    // })
fs.readFile(realPath,(err,data)=>{
        res.writeHead(200,{'Content-Type':`${mim[ext]};charset=utf-8`});
        res.end(data);
    });

}).listen(8081,()=>{
    console.log('fuwuqi 8081')
})