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





                resolve(res.body);
            })
    })
}


const classifyUrl = 'http://ccjd.vip/init_Filter'
// 小说分类列表url
getClassify(classifyUrl).then(async function (data) {
    let sql = "INSERT INTO category SET ?"
    data.forEach(item=>{
        let post = {product_category:item.product_category,product_category_id:item.product_category_id}
        mysql.EXECUTE(sql,post).then(a=>{
            console.log(post.toString()+"----插入成功")
        })
    })
})