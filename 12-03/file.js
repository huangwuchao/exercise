const fs = require('fs');
//
//读取文件 fs。readFile（‘文件路径’，回调函数）；
fs.readFile('img/data.txt',(err,data)=>{
        if(err){
            console.log('读取文件失败');
        }
        console.log('data:',data.toString());
})

//写入文件 fs.writeFile//会覆盖原文件的内容
//写入文件 fs.appendFile//会在原来的文本上追加内容；
//  \n 是给文档换行
//  
fs.appendFile('img/data.txt','\n要到10点半左右',(err)=>{
    if(err){
        throw Error('文件写入失败') 
    }
    console.log('文件写入成功');
})
//以上所有的方法都是异步方法