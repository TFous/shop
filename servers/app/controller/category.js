'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
    async show() {
        const { ctx, service } = this;
        let response = {success: false, message: "操作失败"};
        const post = await service.category.get();
        response.message = "操作成功";
        response.success = true;
        response.data = post;
        ctx.body = response;
        ctx.status = 200;
    }
}

module.exports = CategoryController;
