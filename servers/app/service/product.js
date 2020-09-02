const Service = require('egg').Service;

class ProductService extends Service {
    // ASC   desc
    async get(category,limit=10,offset=0,order='ASC') {
        let data = await this.app.mysql.select('product', {
            where: {
                category: [category], // 相当于 in
            },
            orders: [['product_token_price', order]],
            limit: limit, // 返回数据量
            offset: offset, // 数据偏移量
        });
        return data
    }
    async getCount(category) {
        const totalCount = await this.app.mysql.count('product', {
            category: [category]
        });
        return totalCount
    }

}

module.exports = ProductService;