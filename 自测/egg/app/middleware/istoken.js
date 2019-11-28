
const jwt = require("jsonwebtoken")

module.exports = () => {
    return async (ctx, next) => {
        let { token } = ctx.params
        if (ctx.path == "/api/login") {
            await next()
        } else {
            if (token) {
                try {
                    let flag = jwt.verify(token, "李华")
                    if (flag) {
                        await next()
                    } else {
                        ctx.body = {
                            code: 2,
                            msg: "没有权限"
                        }
                    }
                } catch (error) {
                    ctx.body = {
                        code: 0,
                        msg: "身份已过期"
                    }
                }

            } else {
                ctx.body = {
                    cdoe: 3,
                    msg: "缺少参数"
                }
            }

        }
    }

}