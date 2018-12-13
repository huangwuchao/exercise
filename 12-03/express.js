const express= require('express');
const body= require('body-parser')

//console.log(express);
const app= express();//用express第三方模块开启服务器生成端口
    


// 静态资源服务器
// 中间件：express.static

app.use(express.static('./'));
//定义主页路由，当我们访问http://localhost:3100会触发
app.get('/',(req,res)=>{
    res.send('zheshisouye');
})
//定义任意路由，当我们访问http://localhost:3100/zhizai时会触发
app.get('/zhizai',(erq,res)=>{
     let cartlist = [{id:1,name:'iphonXs',price:8998},{id:2,name:'node7',price:998}]
    res.send(cartlist)
})
app.post('/zhizai',(req,res)=>{
    let cartlist = [{id:1,name:'iphonXs',price:88898},{id:2,name:'node7',price:9988}]
    res.send(cartlist)
})
//定义带参数的路由
//关键字查找  输入的模式是：http://localhost:3100/cha?man=123
//查询参数：通过 request.query 来获取参数
app.get('/cha',(req,res)=>{
    console.log(req.query.man);//man 是你想获取那个参数的值的参数名
    // 1.获取到搜索关键字
    // 2.根据关键字查询数据库
    // 3.把结果返回给前端
    res.send('这是数据');
})

//商品详情页 也叫做动态路由:地址为变量
app.get('/xiang/:id',(req,res)=>{
    let xiang=[{id:1,name:'iphonXs',price:88898},{id:2,name:'node7',price:9988}];
    let {id}=req.params;
    let idy= xiang.filter(item=>item.id==id);
    idy=idy[0] ? idy[0] : {};//这个判断是为了如果传的id是空的话，idy不会是undefinen,页面不会显示错误
    res.send(idy);

})
//商品列表页
app.get('/liebiao',(req,res)=>{
     // 获取商品类型
    let category = req.query.category;

    // mysql
    // let sql = `select * from goods where category=${category}`

    let goodslist;
    switch(category){
        case 'shou':
            goodslist = [{id:1,name:'iphonXs',price:8998},{id:2,name:'node7',price:998}]
            break;
        case 'dian':
            goodslist = [{id:3,name:'lenovo',price:1998},{id:4,name:'hp',price:5998}];
            break;
        default:
            goodslist = []
    }
    res.send(goodslist);
})

//post请求，实现数据登陆
app.post('/cart',body.urlencoded({ extended: false }),(req,res)=>{
    // console.log(req.body)
    // res.send('shopping car post');
    console.log(req.body)

    let user = [
        {username:'laoxie',password:123456},
        {username:'tiantian',password:888888}
    ]
    
    // 根据用户名和密码
    // 查询数据库，是否存在
    let {username,password} = req.body;
    let has = user.filter(item=>username==item.username&&password==item.password)
    if(has.length>0){
        res.send({code:1,msg:'success',data:[]});
    }else{
        res.send({code:0,msg:'fail',data:[]});
    }
    

})


app.listen(3100,()=>{
    console.log('Server running on http://localhost:3100')
})  