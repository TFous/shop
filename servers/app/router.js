'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/query/:category/:name/:page', controller.search.query);
  router.get('/api/category', controller.category.show);
  router.get('/api/getCategoryPro/:category/:page', controller.product.show);
};
