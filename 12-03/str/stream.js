const fs=require('fs');//引进原生块fs
const zlib= require('zlib');//
let shuji= fs.createReadStream('./shuju/football.json');//以流的方式读取json文件
let data='';//创建一个空的字符串来接收流的方式读取出来的数据
shuji.on('data',chunk=>{
    //console.log(chunk);
    data+=chunk;
})//因为文件不会一次性加载到data，所以要追加到data；
//console.log(data);
// shuji.on('end',()=>{
//     console.log(data);
// });//用end的方式查看读取到的数据




// let xieru= fs.createWriteStream('shuju.txt');
// xieru.write('nihao ');
// xieru.end();

 shuji.on('data',chunk=>{
    //console.log('chunk:',chunk.toString());
})
 // 创建一个可写流
let writeStream = fs.createWriteStream('shuju.txt');// 读取 input.txt 文件内容，并将内容写入到 shuju.txt 文件中
  // 管道读写操作

shuji.pipe(writeStream);//通过pipe（管道）把读取流读取到的文件复制到写入流设置好的文件中


//fs.createReadStream('./shuju/football.json').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.zip'));

fs.createReadStream('input.txt.zip').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('./shuju/shuju.txt'));
//console.log(zlib);