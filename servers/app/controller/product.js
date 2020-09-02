'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
    async show() {
        const { ctx, service } = this;
        const category  = ctx.params.category;
        let pageNumber = ctx.params.page;
        let response = {success: false, message: "操作失败"};
        console.log(pageNumber)
        const data = await service.product.get(category,pageNumber);
        const totalCount = await service.product.getCount(category);
        response.message = "操作成功";
        response.success = true;
        response.data = data;
        response.count = totalCount;
        ctx.body = response;
        ctx.status = 200;
    }
}

module.exports = ProductController;
