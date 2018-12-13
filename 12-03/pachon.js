const request= require('request');
const cheerio= require('cheerio');
const fs= require('fs');
const path= require('path');


request({
    url:'http://www.netbian.com/youxi/'
},(error,response,body)=>{
    //console.log(body);
    let $=cheerio.load(body);
    let res = $('#main .list a').each((idx,ele)=>{
        let src = $(ele).attr('href');
        if(src.startsWith('/')){
            src = 'http://www.netbian.com'+src;
            try{
                request(src,(err,ers,body)=>{
                    try{
                        let $ = cheerio.load(body);
                        $('.pic img').each((i,e)=>{
                            let url= $(e).attr('src');
                            let filename = path.basename(url);
                            request(url).pipe(fs.createWriteStream('./img/'+filename));
                                console.log(123)

                        })
                    }catch(err){

                    }
                })
            }catch(err){

            }
        }
    })
})
