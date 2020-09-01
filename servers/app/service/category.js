const Service = require('egg').Service;

class CategoryService extends Service {
    async get() {
        // const category = await this.ctx.model.category.find();
        const category = await this.app.mysql.query('select * from category');
        return category
    }

}

module.exports = CategoryService;