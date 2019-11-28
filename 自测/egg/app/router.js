'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/api/login",controller.user.login)
  router.get("/api/list",controller.home.list)
};
