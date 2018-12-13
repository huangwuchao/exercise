
let obj={
    name:'laoge',
    age:10086,
    gender:'男'
}
//module.exports = obj;

exports.getName = ()=>{
    return 'tiantian'
}

exports.setName = (name)=>{
    return person.name = name;
}
//利用module.exports 来对外暴露接口（推荐）
//一个js文件里只能有一个module.exports；
//如果用了exports就要注释掉module.exports，不然就算写了暴露文件，也链接不到文件 

