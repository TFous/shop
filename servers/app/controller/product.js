'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
    async show() {
        const { ctx, service } = this;
        const category  = ctx.params.category;
        let response = {success: false, message: "操作失败"};
        const post = await service.product.get(category);
        response.message = "操作成功";
        response.success = true;
        response.data = post;
        ctx.body = response;
        ctx.status = 200;
    }
}

module.exports = ProductController;
