
const mysql = require('./db.js');

let sql1 = "CREATE TABLE category(id int AUTO_INCREMENT,product_category VARCHAR(255),PRIMARY KEY(id))"
let sql2 = "CREATE TABLE product(id int AUTO_INCREMENT,product_jd_price VARCHAR(255),product_rebate_url VARCHAR(255),sku_id VARCHAR(255),product_name VARCHAR(255),product_token_price VARCHAR(255),product_img_url VARCHAR(255),category VARCHAR(255),PRIMARY KEY(id,sku_id))"

function creat(sql){
    mysql.EXECUTE(sql,[],(err,result) => {
        if(err) throw err;
        console.log(result);
    })
}

// creat(sql1)
creat(sql2)