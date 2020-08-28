const mysql = require('./mysql/db.js');
const fs = require('fs'); // 引入fs模块
const superagent = require('superagent');
require('superagent-charset')(superagent)

// 小说分类
async function getClassify(url) {
    return new Promise((resolve, reject) =>{
        superagent.post(url).type("form")
            .send({
                postParam: "737,794,798",
                priceFlag: "",
                saleFlag: "up",
                pageSize: 12,
                pageNo: 2
            })
            // .charset('gbk')
            .end(async(err, res) => {
                if (err) {
                    return next(err);
                }
                resolve(res.body);
            })
    })
}
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

const classifyUrl = 'http://ccjd.vip/get_category'
// 小说分类列表url
getClassify(classifyUrl).then(async function (data) {
    let sql1 = "INSERT INTO product SET ? WHERE NOT EXISTS(SELECT sku_id FROM product WHERE sku_id = ?)"
    let sql = `INSERT INTO product(product_jd_price,product_rebate_url,sku_id,product_name,product_token_price,product_img_url) SELECT ?,?,?,?,?,? FROM DUAL WHERE NOT EXISTS(SELECT sku_id FROM product WHERE sku_id = ?)`

    for(var i =0;i<data.dataList.length;i++){
        var item = data.dataList[i]
        let a = [item.product_jd_price,
            item.product_rebate_url,
            item.sku_id,
            item.product_name,
            item.product_token_price,
            item.product_img_url,
            item.sku_id]
        console.log(a)
        await mysql.EXECUTE(sql,a).then(a=>{
            console.log("-----------插入成功---------------")
        })
    }

})