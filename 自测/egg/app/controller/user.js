'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")
class UserController extends Controller {
    async login() {
        const { ctx, service } = this;
        let { username, password } = ctx.request.body
        let token = jwt.sign({ username, password }, "李华", { expiresIn: 600 })
        try {
            let data = await service.user.login(username, password)
            ctx.body = {
                code: 1,
                msg: "登录成功",
                token,
                data
            }

        } catch (error) {
            ctx.body = {
                code: 0,
                error
            }
        }

    }
}

module.exports = UserController;
