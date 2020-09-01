const Service = require('egg').Service;

class ProductService extends Service {
    async get(category,limit=10,offset=0) {
        let data = await this.app.mysql.select('product', {
            where: {
                category: [category], // 相当于 in
            },
            order: [['product_token_price', 'desc']],
            limit: limit, // 返回数据量
            offset: offset, // 数据偏移量
        });
        return data
    }

}

module.exports = ProductService;