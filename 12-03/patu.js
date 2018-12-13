const request= require('request');
const cheerio= require('cheerio');
const fs= require('fs');
const path= require('path');

request('http://huaban.com/pins/1269408492/', (error, response, body) => {
    //console.log(body);
        let $ = cheerio.load(body);

        $('.image-holder img').each((i, e) => {
            console.log(123)
            let src = $(e).attr('src');
            let filename = path.basename(src);

            request(src).pipe(fs.createWriteStream('./img/'+filename))
        })
    });
// request({
//     url:'http://huaban.com/pins/1269408492/'
// },(error,response,body)=>{
//     console.log(body);
    
    // let $=cheerio.load(body);
     //let res = $('#baidu_image_holder img').each((idx,ele)=>{
    //     let src = $(ele).attr('href');
    //     if(src.startsWith('/')){
    //         src = 'http://huaban.com/pins/1269408492/'+src;
    //         console.log(123)
    //         try{
    //             request(src,(err,ers,body)=>{
    //                 try{
    //                     let $ = cheerio.load(body);
    //                     $('#baidu_image_holder img').each((i,e)=>{
    //                         let url= $(e).attr('src');
    //                         let filename = path.basename(url);
    //                         request(url).pipe(fs.createWriteStream('./img/'+filename));
                                

    //                     })
    //                 }catch(err){

    //                 }
    //             })
    //         }catch(err){

    //         }
    //     }
    //})
//})
