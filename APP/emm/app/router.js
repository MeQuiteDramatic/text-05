'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //登录
  router.post("/api/login", controller.user.login)
  //请求权限数据
  router.get("/api/rights", controller.user.rights)
  //注册
  router.post('/api/register',controller.user.register)
};
