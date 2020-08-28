const mysql = require('./mysql/db.js');
const request = require('superagent');
const cheerio = require('cheerio');
var http = require("http");
const fs = require('fs'); // 引入fs模块
require('superagent-charset')(request)

// 小说分类
async function getClassify(url) {
    return new Promise((resolve, reject) =>{
        request
            .get(url)
            // .charset('gbk')
            .end(async(err, res) => {
                if (err) {
                    return next(err);
                }
                let sql = `INSERT INTO category(product_category) SELECT ? FROM DUAL WHERE NOT EXISTS(SELECT product_category FROM category WHERE product_category = ?)`
                var $ = cheerio.load(res.text);
                let dd = $(".jq22-palace").find("a")
                let len = dd.length;
                for(var i=0;i<len;i++){
                    let product_category = dd.eq(i).find("h2").text().trim()
                    console.log(product_category)
                    let parameter = [product_category,product_category]
                    await mysql.EXECUTE(sql,parameter).then(a=>{
                        console.log("-----------插入成功---------------")
                    })

                }
            })
    })
}


const classifyUrl = 'http://535.shop.hnslxd.com/'
// 小说分类列表url
getClassify(classifyUrl).then(async function (data) {

})