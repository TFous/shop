'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
    async query() {
        const { ctx, service } = this;
        const category  = ctx.params.category;
        let name = ctx.params.name;
        let pageNumber = ctx.params.page;
        const results = await service.search.get(category,pageNumber,name);
        const count = await service.search.getCount(category,name);
        let response = {success: false, message: "操作失败"};
        response.count = count;
        response.message = "操作成功";
        response.success = true;
        response.data = results;
        ctx.body = response;
        ctx.status = 200;
    }

}

module.exports = SearchController;
