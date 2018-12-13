const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;

let app = express();

// 静态资源服务器
app.use(express.static('./'));


// 路由
// 注册
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/reg',urlencodedParser ,(req,res)=>{
    let {username,password,gender} = req.body;

    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('h1809');

        // 使用集合
        let user = db.collection('zhechedenlu');


        // 插入数据
        user.insert({name:username,password,gender,reg_time:Date.now()},(err,result)=>{
            console.log(err)
            let data;
            if(err){
                data={
                    code:0,
                    data:[],
                    msg:err
                }
            }else{
                data = {
                    code:1,
                    data:result.ops,
                    msg:'插入成功'
                }
            }

            res.send(data);
        });
       

        // 关闭数据库，避免资源浪费
        database.close();

    });
});


// 登录
app.post('/login',urlencodedParser,(req,res)=>{
    let {username,password} = req.body;
    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('h1809');

        // 使用集合
        let user = db.collection('zhechedenlu');

        // 处理password为数字的情况
        //password = isNaN(password) ? password : password*1;

        // 查询是否存在数据
        user.findOne({name:username,password},(err,result)=>{
         
            if(result){
                // 登录成功后，给前端发送用户表示：token
                res.send({
                    code:1,
                    data:result,
                    msg:'ok'
                })
            }else{
                res.send({
                    code:0,
                    data:[],
                    msg:'fail'
                })
            }
        });

        // 关闭数据库，避免资源浪费
        database.close();

    });
});

// 验证用户名是否能注册
app.get('/checkusername',(req,res)=>{
    // 获取传来的用户名
    //console.log(req)
    let {username} = req.query;
    
    MongoClient.connect('mongodb://localhost:27017',(err, database)=>{
        //连接成功后执行这个回调函数
        if(err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('h1809');

        // 使用集合
        let user = db.collection('zhechedenlu');


        // 查询是否存在数据
        user.findOne({name:username},(err,result)=>{
                //console.log(result);
            if(result){
                res.send({
                    code:0,
                    data:[],
                    msg:'fail'
                })
            }else{
                res.send({
                    code:1,
                    data:[],
                    msg:'ok'
                })
            }
        });

        // 关闭数据库，避免资源浪费
        database.close();

    });



})


app.listen(3108,()=>{
    console.log('server is running on http://localhost:3108');
})