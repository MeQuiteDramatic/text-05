'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async list() {
    const { ctx, service } = this;

    try {
      let data = await service.user.list()
      ctx.body = {
        code: 1,
        data
      }
    } catch (error) {
      ctx.body={
        code:0,
        error
      }
    }


  }
}

module.exports = HomeController;
