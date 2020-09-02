const mysql = require('./mysql/db.js');
const request = require('superagent');
const cheerio = require('cheerio');
var http = require("http");
const fs = require('fs'); // 引入fs模块
require('superagent-charset')(request)
// 小说分类


const host = "http://535.shop.hnslxd.com"

function sleep(time = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
};

async function getClassify(page, index) {
    var category = categoryList[index]
    let url = "http://535.shop.hnslxd.com/api/page_new?page=" + page + "&search=" + category + "&sortname=insert_time&sortorder=desc";
    console.log(url)
    let a = encodeURI(url);
    return await new Promise((resolve, reject) => {
        request.get(a)
            .end(async (err, res) => {
                if (err) {
                    return next(err);
                }
                var $ = cheerio.load(res.text);
                let dd = $(".jq22-list-item")
                if (dd.text().length > 0) {
                    let len = dd.length;
                    for (var i = 0; i < len; i++) {
                        let msg = dd.eq(i).find(".jq22-flex-box")
                        let sku_id = msg.find("span").eq(1).attr("id")
                        let price = msg.find("h2").text().split("￥")
                        let product_jd_price = price[2].trim()
                        let product_token_price = price[1].trim()
                        let product_img_url = dd.eq(i).find(".jq22-list-theme-img").find("img").attr("src")
                        let product_name = dd.eq(i).find(".jq22-list-theme-subtitle").text().trim()
                        let priduct_url = host + dd.eq(i).attr("href")

                        await sleep(80);

                        request.get(priduct_url)
                            .end(async (err, res) => {
                                if (err) {
                                    return next(err);
                                }
                                var $ = cheerio.load(res.text);
                                let dd = $(".desc-short")
                                let product_rebate_url = dd.find(".button").eq(1).attr("href")
                                let sql = `INSERT INTO product(product_jd_price,product_rebate_url,sku_id,product_name,product_token_price,product_img_url,category) SELECT ?,?,?,?,?,?,? FROM DUAL WHERE NOT EXISTS(SELECT sku_id FROM product WHERE sku_id = ?)`
                                let parameter = [
                                    Number(product_jd_price),
                                    product_rebate_url,
                                    sku_id,
                                    product_name,
                                    Number(product_token_price),
                                    product_img_url,
                                    category,
                                    sku_id]
                                await mysql.EXECUTE(sql, parameter).then(a => {
                                    console.log("-----------插入成功---------------")
                                })
                            })
                    }
                    if (len > 0) {
                        await getClassify(page + 1, index)
                    }
                } else {
                    var _index = index + 1
                    if (_index <= categoryList.length - 1) {
                        await getClassify(1, _index)
                    }
                }
                resolve(true)
            })
    })
}

// "热水器",
const categoryList = ["冰柜", "冰箱", "空调", "电视", "燃气灶", "消毒柜", "洗碗机", "洗衣机"]

async function run() {
    const len = categoryList.length;
    for (var i = 0; i < len; i++) {
        await getClassify(1, categoryList[i])
    }
}

function clearFn(){
    let clearTable = "truncate table product"
    mysql.EXECUTE(clearTable,[],(err,result) => {
        if(err) throw err;
        console.log("删除成功");
    })

}


clearFn();
getClassify(1, 0)