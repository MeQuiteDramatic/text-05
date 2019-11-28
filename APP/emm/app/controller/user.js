'use strict';

const Controller = require('egg').Controller;
const jwt = require("jsonwebtoken")
class HomeController extends Controller {
    //登录
    async login() {
        const { ctx, service } = this;
        let { username, password } = ctx.request.body;

        let flag = this.app.validator.validate({ username: 'string', password: 'password' }, { username, password })
        if (flag) {
            ctx.body = {
                code: 2,
                msg: '缺少参数或参数格式有误'
            }
        } else {
            try {
                let data = await service.user.login([username, password])
                let token = jwt.sign({ username, password, rank: data[0].rank }, "李华", { expiresIn: 60 * 60 })
                if (data.length) {
                    ctx.body = {
                        code: 1,
                        msg: "登陆成功",
                        token,
                        rank: data[0].rank
                    }
                } else {
                    ctx.body = {
                        code: 0, msg: "用户名或密码错误"
                    }
                }
            } catch (error) {
                ctx.body = {
                    code: 3,
                    msg: "失败"
                }

            }
        }
    }
    //权限列表
    async rights() {
        const { ctx, service } = this;
        let token = ctx.request.header.token

        try {
            let obj = jwt.verify(token, "李华")
            console.log('====', obj)
            let data = await service.user.rights(obj.rank)
            ctx.body = {
                code: 1,
                data
            }
        } catch (error) {
            ctx.body = {
                code: 3,
                msg: "登录时间过期，请重新登录"
            }
        }
    }
    //注册
    async register() {
        const { ctx, service } = this;
        let { username, password } = ctx.request.body
        let data = await service.user.selectname(username)
     
        if (data.length) {
            ctx.body = {
                code: 2,
                msg: "此用户已存在"
            }
        } else {
            try {
                await service.user.register(username, password)
                ctx.body = {
                    code: 1,
                    msg: "添加成功"
                }
            } catch (error) {
                ctx.body = {
                    code: 0,
                    msg: error
                }
            }



        }

    }
}

module.exports = HomeController;
